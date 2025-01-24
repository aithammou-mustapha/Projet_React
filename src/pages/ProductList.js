import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Produit A", price: 29.99 },
  { id: 2, name: "Produit B", price: 49.99 },
  { id: 3, name: "Produit C", price: 19.99 },
];

const ProductList = () => {
  return (
    <div>
      <h1>Nos Produits</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;