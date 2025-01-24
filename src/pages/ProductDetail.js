import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams(); // Récupère l'ID du produit depuis l'URL

  return (
    <div>
      <h1>Détails du produit {id}</h1>
      <p>Informations sur le produit ici...</p>
    </div>
  );
};

export default ProductDetail;