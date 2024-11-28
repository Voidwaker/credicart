import React from "react";
import SearchBar from "./searchBar";

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
        <SearchBar products={products} onSearch={onSearch} /> {}
      </nav>
    </header>
  );
}

export default Header;
