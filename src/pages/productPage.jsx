import React from "react";
import { useParams } from "react-router-dom";

function ProductPage({ products, addToCart }) {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <img
        src={product.image.url}
        alt={product.image.alt}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> {product.discountedPrice} NOK
        {product.discountedPrice < product.price && (
          <span style={{ marginLeft: "10px", color: "red" }}>
            ({Math.round(
              ((product.price - product.discountedPrice) / product.price) * 100
            )}
            % off!)
          </span>
        )}
      </p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
