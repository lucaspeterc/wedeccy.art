"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("Kurier Standard");
  const [shippingCost, setShippingCost] = useState(600);

  // (Optional) localStorage logic

  // 1. Define calculateSubtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // 2. Define calculateTotal
  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost;
  };

  // 3. Expose a helper to update shipping cost based on method
  const updateShippingMethod = (method) => {
    setShippingMethod(method);
    switch (method) {
      case "Kurier Standard":
        setShippingCost(600);
        break;
      case "Kurier Express":
        setShippingCost(800);
        break;
      case "Odbiór osobisty":
        setShippingCost(0);
        break;
      default:
        setShippingCost(600);
    }
  };

  // 4. addToCart, removeFromCart, etc.
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        shippingMethod,
        shippingCost,
        calculateSubtotal,
        calculateTotal,
        updateShippingMethod,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
