import React from "react";
import { Link } from "react-router-dom";

function CheckoutSuccessPage({ clearCart }) {
  React.useEffect(() => {
    clearCart(); 
  }, [clearCart]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Thank you for your purchase!</h1>
      <p>Your order was successful. You will receive an email confirmation shortly.</p>
      <Link to="/">
        <button style={{ padding: "10px 20px", background: "#1abc9c", color: "white", border: "none", borderRadius: "5px" }}>
          Back to Store
        </button>
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
