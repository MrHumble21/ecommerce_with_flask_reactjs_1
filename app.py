from flask import Flask, jsonify, request, flash, redirect, url_for, session
from flask_session import Session

from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy

from flask_migrate import Migrate
import os
from pprint import pprint

import pyrebase

config = {
    "apiKey": "AIzaSyDVJAxQ-uLNv_H7i2j5xbaLlOBl3iZs7qc",
    "authDomain": "eshop-55aa2.firebaseapp.com",
    "projectId": "eshop-55aa2",
    "storageBucket": "eshop-55aa2.appspot.com",
    "messagingSenderId": "45401340270",
    "appId": "1:45401340270:web:d052ec80ffe404c7e9e97f",
    "measurementId": "G-MLR2FVWVST",
    "databaseURL": "https://console.firebase.google.com/project/eshop-55aa2/database/eshop-55aa2-default-rtdb/data/~2F"
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()

UPLOAD_FOLDER = 'shop/src/images'
ALLOWED_EXTENSIONS = {'jpg', 'png', 'gif', 'jpeg', 'svg', 'heic', 'ico'}

app = Flask(__name__)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

app.config['SECRET_KEY'] = "MALIKOV"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fruit.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# session configurations
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

items_in_cart = []


class Products(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(255), nullable=False)
    stock = db.Column(db.Integer, nullable=False)


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    username = db.Column(db.String(255), unique=True, nullable=False)
    phone = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(50), nullable=False)


# class Notification(db.Model):             #  NEW table ADDED, Need to migrate database
#     __tablename__ = 'notifications'
#     message = db.Column(db.Text)


db.create_all()


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def index():
    return "<center>" \
           "<h1>Hello happy world!</h1>" \
           "</center>"


@app.route('/cabinet')
def home():
    try:
        if session['user']:
            return jsonify({
                'status': 1,
                'name': session['user'].name,
                'email': session['user'].email,
                'password': session['user'].password,
                'username': session['user'].username,
                'phone': session['user'].phone,
                'gender': session['user'].gender,
            })
        else:

            return jsonify({'status': 0})
    except KeyError:
        return jsonify({'status': 0})


@app.route('/save_product', methods=['POST'])
def save_product():
    product = request.form
    if 'file' not in request.files:
        flash('image is not selected. Please select an image!')
        return redirect(url_for('home'))
    file = request.files['file']
    if file.filename == '':
        flash('No image selected. Please select an image!')
        return redirect(url_for('home'))
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        flash('Products successfully saved to the database!')

        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        storage.child(f'images/{filename}').put(f'shop/src/images/{filename}')
        url = storage.child(f'images/{filename}').get_url(None)

        new_product = Products(
            name=product['name'],
            description=product['description'],
            price=product['price'],
            stock=product['stock'],
            image=url

        )
        print(url)
        db.session.add(new_product)
        db.session.commit()

        return redirect(url_for('home'))

    else:
        flash("allowed image types are - 'jpg', 'png', 'gif', 'jpeg', 'svg', 'heic', 'ico' ")
        return redirect(url_for('home'))


@app.route('/top_product', methods=['POST', 'GET'])
def get_top_products():
    products = Products.query.all()
    all_top_products = []
    for product in products:
        each_product = {
            'ids': product.id,
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'image': product.image,
            'stock': product.stock
        }
        all_top_products.append(each_product)
    return jsonify(all_top_products)


@app.route('/edit_product<int:ids>',
           methods=['POST', 'GET'])  # HERE WE EDIT PRODUCTS  ##################################
def edit_product(ids):
    product_to_edit = Products.query.filter(id=ids)
    product_to_edit.name = request.form.get('name')
    product_to_edit.description = request.form.get('description')
    product_to_edit.stock = request.form.get('stock')

    if 'file' not in request.files:
        flash('image is not selected. Please select an image!')
        db.session.commit()
        return redirect(url_for('home'))
    file = request.files['file']
    if file.filename == '':
        flash('No image selected. Please select an image!')
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        flash('Products successfully edited!')

        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        storage.child(f'images/{filename}').put(f'shop/src/images/{filename}')
        url = storage.child(f'images/{filename}').get_url(None)

        product_to_edit.image = url
    db.session.commit()
    return redirect(url_for('home'))


@app.route('/delete_product<int:ids>',
           methods=['POST', 'GET'])  # HERE WE DELETE PRODUCTS  ##################################
def delete_product(ids):
    Products.query.filter(id=ids).delete()
    db.session.commit()
    flash(f'Selected product successfully deleted!')
    return redirect(url_for('home'))


@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    try:
        id_of_item = int(request.form['cart_id'])
    except Exception as e:
        print(e)
    product = Products.query.filter_by(id=id_of_item).first()
    selected_product_to_cart = {
        'ids': product.id,
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'image': product.image,
        'stock': product.stock
    }
    items_in_cart.append(selected_product_to_cart)
    return redirect(url_for('home'))


@app.route('/sign_up', methods=['POST'])
def sign_up():
    data = request.form
    new_user = User(
        name=data['name'],
        email=data['email'].lower(),
        gender=data['gender'],
        password=data['password'],
        username=data['username'].lower(),
        phone=data['phone'],
    )
    db.session.add(new_user)
    db.session.commit()

    user = User.query.filter_by(email=data['email']).first()
    session['user'] = user
    pprint(session['user'])
    return redirect(url_for('home'))


@app.route('/all_users')
def all_users():
    users = User.query.all()
    user_list = {'email': [], 'username': []}
    for user in users:
        user_list['email'].append(user.email)
        user_list['username'].append(user.username)
    return jsonify(user_list)


@app.route('/logout')
def logout():
    session["user"] = None
    print(' user logged out')
    # return redirect(url_for('home'))
    return jsonify({'status': 0})


if __name__ == '__main__':
    app.run(debug=False)

#  $ flask db init
#  $ flask db migrate -m "Initial migration."
# https://flask-migrate.readthedocs.io/en/latest/


#  FOR UPDATE DB (after first time)

#  $ flask db stamp head  # To set the revision in the database to the head, without performing any migrations. You can change head to the required change you want.
#  $ flask db migrate     # To detect automatically all the changes.
#  $ flask db upgrade     # To apply all the changes.
