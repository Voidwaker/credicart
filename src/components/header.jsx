import React from "react";
import SearchBar from "./searchBar";

function Header({ products, onSearch }) {
  return (
    <header>
      <nav>
        <h1>CrediCart</h1>
        <ul>
          <li><a href="/">Hjem</a></li>
          <li><a href="/products">Produkter</a></li>
          <li><a href="/cart">Handlekurv</a></li>
          <li><a href="/contact">Kontakt</a></li>
        </ul>
        <SearchBar products={products} onSearch={onSearch} /> {}
      </nav>
    </header>
  );
}

export default Header;
