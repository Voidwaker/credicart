import React, { useState } from "react";

function SearchBar({ products, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(value)
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
