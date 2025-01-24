import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 

const ProductCard = ({ id, name, price }) => {
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Prix: {price} €</p>
      <button onClick={() => addToCart({ id, name, price })}>🛒 Ajouter au panier</button>
      <br />
      <Link to={`/products/${id}`}>Voir le produit</Link>
    </div>
  );
};

export default ProductCard;