import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        const index = cartList.findIndex(item => item.id == product.id)
        if (index > -1 ) return toast.error("Product already exist")
        setCartList([product, ...cartList])
    }

    const removeFromCart = (removeId) => {
        const res = cartList.filter(item => item.id != removeId)
        setCartList(res)
        return toast.success("Product removed from cart")
    }

    return <CartContext.Provider value={{cartList, setCartList, addToCart, removeFromCart}}>
        { children }
    </CartContext.Provider>
}