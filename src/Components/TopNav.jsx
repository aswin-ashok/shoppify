import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const TopNav = () => {
    return (
        <div className="fixed top-0 w-screen h-16 border-b-2 border-b-black flex justify-between items-center px-10 bg-white z-10">
            <div className="flex items-center">
                <img src="./shopilogo.png" alt="logo" className="w-14 h-14 rounded-full" />
                <h1 className="fond-bold ms-2">Shopify</h1>
            </div>
            <div className="flex gap-4 align-items-center">
                <a href="#"><i className="fa-solid fa-user" /></a>
                <a href="#"><i className="fa-solid fa-envelope" /></a>
                <a href="#"><i className="fa-solid fa-bell" /></a>
                <TiShoppingCart />
            </div>
        </div>
    )
}

export default TopNav;