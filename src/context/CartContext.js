import React, { createContext, useState, useEffect } from "react";

// Création du contexte du panier
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Charger le panier depuis localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    console.log(savedCart);

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🔄 Sauvegarder le panier dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🔥 Ajouter un produit au panier
  const addToCart = (product) => {
    setCart([...cart, product]); // Ajoute un produit à chaque clic
  };

  // 🔄 Supprimer UNE SEULE occurrence d’un produit
  const removeFromCart = (id) => {
    const indexToRemove = cart.findIndex(item => item.id === id);
    console.log(indexToRemove);
    
    if (indexToRemove !== -1) {
      const newCart = [...cart];
      newCart.splice(indexToRemove, 1); // Supprime seulement une occurrence
      setCart(newCart);
    }
  };

  // 🗑 Vider complètement le panier
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};