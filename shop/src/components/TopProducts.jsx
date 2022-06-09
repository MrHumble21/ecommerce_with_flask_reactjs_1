import React, {useEffect, useState} from "react";
import ProductCard from "./ProductCard";


function TopProducts() {

const [fruits, setFruits] = useState([])


    useEffect(()=>{
        fetch('/top_product')
            .then(response => response.json())
            .then(data => (setFruits(data)))
    },[])



   
    return (
        <React.Fragment>
            <h2 className="text-center my-4">Our Top Products!</h2>
            <div className="container">
                <div className="row">
                    {fruits.map((e, i) => {

                            return < div key={i} className="col-sm-4">
                                < ProductCard
                                    img={e.image}
                                    title={e.name}
                                    description={e.description}
                                    price={e.price}
                                    ids={e.ids}
                                />
                            </div>
                        }
                    )}
                </div>
            </div>

            <div className="container d-flex justify-content-center my-5">
                <button className="text-center btn-info btn w-50">VIEW ALL!</button>
            </div>
        </React.Fragment>
    );
}

export default TopProducts;
