import React from "react";
import { useNavigate } from "react-router-dom"; 

function CartPage({ cart, clearCart }) {
  const navigate = useNavigate(); 

  const total = cart.reduce(
    (acc, item) => acc + (item.discountedPrice || 0) * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    clearCart(); 
    navigate("/checkout-success"); 
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Your Cart</h1>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {cart.map((item, index) => (
            <li
              key={`${item.id}-${index}`} 
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              {}
              <img
                src={item.image.url}
                alt={item.image.alt}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  marginRight: "20px",
                }}
              />
              {}
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: 0 }}>{item.title}</h2>
                <p style={{ margin: "5px 0" }}>Price: {item.discountedPrice} NOK</p>
                <p style={{ margin: "5px 0" }}>Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {}
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Total: {total.toFixed(2)} NOK
      </h2>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleCheckout} 
          style={{
            padding: "10px 20px",
            background: "#1abc9c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;



