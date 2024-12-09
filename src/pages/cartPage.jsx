import React from "react";
import { Link } from "react-router-dom";

function CartPage({ cart }) {
  const totalPrice = cart.reduce((total, item) => total + item.discountedPrice, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back to the store</Link>.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                }}
              >
                <div>
                  <h2>{item.title}</h2>
                  <p>Price: {item.discountedPrice} NOK</p>
                </div>
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </li>
            ))}
          </ul>
          <h2>Total: {totalPrice.toFixed(2)} NOK</h2>
          <Link to="/checkout-success">
            <button style={{ padding: "10px 20px", background: "#1abc9c", color: "white", border: "none", borderRadius: "5px" }}>
              Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartPage;
