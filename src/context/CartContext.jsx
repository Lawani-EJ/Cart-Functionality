import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const incrementQTY = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decrementQTY = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const values = {
    cart,
    addToCart,
    removeFromCart,
    incrementQTY,
    decrementQTY,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};
