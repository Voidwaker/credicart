import React from "react";

function Header({ products, onSearch }) {
  return (
    <header>
      <nav>
        <h1>CrediCart</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
