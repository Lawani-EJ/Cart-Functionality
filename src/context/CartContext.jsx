import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext()

export const GlobalProvider = ({children}) => {

    const [cart, setCart] = useState(() =>{
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : []
    })

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    const addToCart = (product) => {
        alert("Adding " + product.title + " to cart");
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const incrementQTY =() =>{}

    const decrementQTY =() =>{}

    const removeFromCart =()=>{}

    const getTotalPrice = () =>{}

const values = {
    cart,
    addToCart,
    removeFromCart,
    incrementQTY,
    decrementQTY,
    getTotalPrice
}

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}