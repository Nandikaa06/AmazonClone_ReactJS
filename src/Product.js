import React from 'react'
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {
   const [{ basket }, dispatch] = useStateValue();

   console.log("this is the basket >>> ", basket);
    
    const addToCart = () => {
        //dispatch the item into data layer
        dispatch ({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>MYR</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                       .fill()
                       .map((_, i) => (
                        <p>🌟</p>
                    ))}
                    
                </div>
            </div>

            <img src={image} alt=" " />

            <button onClick={addToCart}> Add to Cart</button>
        </div>
    )
}

export default Product
