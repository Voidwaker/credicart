import React, { useState, useEffect } from "react";
import Layout from "./components/layout";
import Carousel from "./components/carousel";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setFilteredProducts(data.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Layout>
      <Carousel products={products} /> {}
      <h1>Velkommen til CrediCart!</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredProducts.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <img
              src={product.image.url}
              alt={product.image.alt}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Pris:</strong> {product.discountedPrice} NOK
              {product.discountedPrice < product.price && (
                <span style={{ marginLeft: "10px", color: "red" }}>
                  ({Math.round(
                    ((product.price - product.discountedPrice) / product.price) * 100
                  )}% rabatt!)
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default App;


