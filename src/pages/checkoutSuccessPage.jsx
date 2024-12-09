import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutSuccessPage({ clearCart }) {
  const navigate = useNavigate();
  const [isCartCleared, setIsCartCleared] = useState(false); 

  useEffect(() => {
    if (!isCartCleared) { 
      clearCart();
      setIsCartCleared(true); 
    }
  }, [clearCart, isCartCleared]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Thank you for your purchase!</h1>
      <p>Your order was successful. You will receive an email confirmation shortly.</p>
      <button
        onClick={() => navigate("/")} 
        style={{
          padding: "10px 20px",
          background: "#1abc9c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Store
      </button>
    </div>
  );
}

export default CheckoutSuccessPage;


