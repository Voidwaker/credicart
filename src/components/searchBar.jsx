import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Søk etter produkter..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          width: "100%",
          maxWidth: "300px",
          padding: "10px",
          margin: "10px 0",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

export default SearchBar;




