import React from "react";
import cart from './assets/cart.svg'

// const [data]

function ProductCard(props) {
    return (<div style={{minHeight: "520px"}} className="custom-card card m-2">
            <div className="container d-flex justify-content-center align-items-center p-2">
                <img src={props.img} className="w-100" alt="..."/>
            </div>
            <div
            style={{marginBottom: 'auto !important'}}
            className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">${props.price.toFixed(2)}</p>
                <form action="/add_to_cart" method="post">
                    <input type="hidden" name='cart_id' value={props.ids}/>
                    <button type='submit' className="btn btn-sm btn-dark">
                       <span> <img src={cart} width="25" alt="" /> Add to cart</span>
                    </button>
                </form>

            </div>
        </div>);
}

export default ProductCard;
