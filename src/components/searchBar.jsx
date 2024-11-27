import React, { useState } from "react";

function SearchBar({ products, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Sjekk om products eksisterer før filtrering
    if (!products || products.length === 0) {
      onSearch([]);
      return;
    }

    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(value) ||
        product.description.toLowerCase().includes(value) ||
        product.tags.some((tag) => tag.toLowerCase().includes(value))
    );
    onSearch(filteredProducts);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Søk etter produkter..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;

