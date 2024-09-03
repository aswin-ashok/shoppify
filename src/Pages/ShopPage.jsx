import React, { Fragment } from "react";
import TopNav from "../Components/TopNav";
import { productList } from "../Constants/products"
import ProductList from "../Components/ProductList";
import { useCart } from "../Hooks/Hooks";

const ShopPage = () => {

    const { cartList } = useCart()
    console.log(cartList);

    return(
        <Fragment>
            <TopNav />
            <div className="flex flex-wrap gap-10 justify-center mt-20">
                {
                    productList.map(product => {
                        return <ProductList key={product.id} product={product} />
                    })
                }
            </div>

            <div className="mt-10">
                <h1 className="text-center">Cart List</h1>
                <div className="mt-10 flex flex-wrap gap-10 justify-center">
                    {
                        cartList.map(product => {
                            return <ProductList key={product.id} product={product}  cart={true} />
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ShopPage;