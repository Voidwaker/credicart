import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Carousel from "./components/carousel";
import ProductPage from "./pages/productPage";
import SearchBar from "./components/searchBar"; 
import ContactPage from "./pages/contactPage"; 
import CartPage from "./pages/cartPage"; 
import CheckoutSuccessPage from "./pages/checkoutSuccessPage"; 
import Header from "./components/header";

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
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

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
        <Header cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
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
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} updateQuantity={updateQuantity} />}
          />
          <Route
            path="/checkout-success"
            element={<CheckoutSuccessPage clearCart={clearCart} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;






