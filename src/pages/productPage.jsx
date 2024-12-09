import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsPopupVisible(true); 
    setTimeout(() => setIsPopupVisible(false), 2000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <img
        src={product.image.url}
        alt={product.image.alt}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> {product.discountedPrice} NOK
      </p>
      {product.discountedPrice < product.price && (
        <p style={{ color: "red" }}>
          Save {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%!
        </p>
      )}
      <button
        onClick={handleAddToCart}
        style={{
          padding: "10px 20px",
          background: "#1abc9c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>

      {}
      {isPopupVisible && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <p>{product.title} has been added to the cart!</p>
          </div>
        </div>
      )}
    </div>
  );
}

const popupStyles = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1000",
};

const popupContentStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

export default ProductPage;


