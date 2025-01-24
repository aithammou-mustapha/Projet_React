import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <ul>
        <li><Link to="/">🏠 Accueil</Link></li>
        <li><Link to="/products">🛍 Produits</Link></li>
        <li>
          <Link to="/cart">🛒 Panier ({cart.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;