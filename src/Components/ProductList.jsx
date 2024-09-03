import React from "react";
import { useCart } from "../Hooks/Hooks";

const ProductList = ({ product, cart=false }) => {

    const { addToCart, removeFromCart } = useCart()

    return (
        <div className="w-52 p-2 border border-black relative">
            <div>
                <img src={product.images[0]} alt={product.title} className="aspect-square object-contain" />
            </div>
            <div className="text-center">
                <h2 className="truncate">{product.title}</h2>
                <div className="flex justify-between items-center">
                    <p className="absolute top-1 right-1">{product.discountPercentage}%</p>
                    <p className={'${product.rating < 2 ? "text-red-600" : product.rating >= 2 && product.rating < 4 ? "text-yellow-400"}'}>{product.rating} <i className="fa fa-star" /></p>
                    <div>
                        <p>{product.price}</p>
                        <p>{(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</p>
                    </div>
                </div>
                {
                    cart ?
                    <button onClick={() => removeFromCart(product.id)} className="p-1 px-2 bg-red-600 text-white w-full mt-2">Remove</button>
                    :
                    <button onClick={() => addToCart(product)} className="p-1 px-2 bg-blue-600 text-white w-full mt-2">Add to Cart</button>
                }
            </div>
        </div>
    );
};

export default ProductList;
