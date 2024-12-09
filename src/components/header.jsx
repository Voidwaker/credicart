import React from "react";
import { Link } from "react-router-dom";

function Header({ cart = [] }) { 
  const totalItems = cart.reduce((total, item) => total + 1, 0); 

  return (
    <header style={{ backgroundColor: "#2c3e50", padding: "10px 20px", color: "white" }}>
      <h1 style={{ display: "inline" }}>CrediCart</h1>
      <nav style={{ float: "right" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0 }}>
          <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
          <li>
            <Link to="/cart" style={{ color: "white", textDecoration: "none", position: "relative" }}>
              🛒
              {totalItems > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


