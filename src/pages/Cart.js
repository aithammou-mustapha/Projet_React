import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0); // 🔥 État pour stocker le total

  // 🔄 Mettre à jour le total quand le panier change
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [cart]); // Dépendance sur cart → exécute quand le panier change

  // 🔥 Simulation d'une commande
  const handleOrder = () => {
    alert(`🛍 Commande validée ! Total : ${totalPrice.toFixed(2)} €`);
    clearCart(); // 🗑 Vider le panier après la commande
  };

  return (
    <div>
      <h1>🛒 Votre Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} €
                <button onClick={() => removeFromCart(item.id)}>❌ Supprimer</button>
              </li>
            ))}
          </ul>

          {/* 💰 Affichage du total dynamique /} */}
          <h2>Total: {totalPrice.toFixed(2)} €</h2>

          {/* {/ Boutons d'action */}
          <button onClick={clearCart}>🗑 Vider le panier</button>
          <button onClick={handleOrder}>✅ Commander</button>
        </>
      )}
    </div>
  );
};

export default Cart;