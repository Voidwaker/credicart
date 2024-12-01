import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Carousel from "./components/carousel";
import ProductPage from "./pages/productPage";
import SearchBar from "./components/searchBar"; 

function App() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((data) => {
        const products = data.data || [];
        setProducts(products);
        setFilteredProducts(products); 
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercasedTerm) ||
        product.description.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} /> {}
                <Carousel products={products} />
                <h1>Welcome to CrediCart!</h1>
                <ul className="product-list">
                  {filteredProducts.map((product) => ( 
                    <li key={product.id}>
                      <img
                        src={product.image.url}
                        alt={product.image.alt}
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <p>
                        <strong>Price:</strong> {product.discountedPrice} NOK
                      </p>
                      <a href={`/products/${product.id}`}>View Product</a>
                    </li>
                  ))}
                </ul>
              </>
            }
          />
          <Route
            path="/products/:id"
            element={<ProductPage products={products} addToCart={addToCart} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;



