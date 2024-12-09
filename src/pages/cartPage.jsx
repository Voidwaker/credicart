import React from "react";

function CartPage({ cart, updateQuantity }) {
  const total = cart.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <img
              src={item.image.url}
              alt={item.image.alt}
              style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "20px" }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: 0 }}>{item.title}</h2>
              <p style={{ margin: "5px 0" }}>Price: {item.discountedPrice} NOK</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  background: "#e74c3c",
                  color: "white",
                  borderRadius: "5px",
                  cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  background: "#2ecc71",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: {total.toFixed(2)} NOK</h2>
      <button
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
  );
}

export default CartPage;


