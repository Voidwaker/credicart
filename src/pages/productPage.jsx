import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductPage({ addToCart }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [confirmation, setConfirmation] = useState(""); 

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                setProduct(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
        setConfirmation(`${product.title} has been added to your cart!`);
        setTimeout(() => setConfirmation(""), 2000); 
    };

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;

    if (!product) {
        return <p>No product found.</p>;
    }

    const calculateDiscount = () => {
        if (product.price > product.discountedPrice) {
            const discount = ((product.price - product.discountedPrice) / product.price) * 100;
            return `${discount.toFixed(2)}% off`;
        }
        return null;
    };

    const calculateSavings = () => {
        if (product.price > product.discountedPrice) {
            const savings = product.price - product.discountedPrice;
            return savings.toFixed(2);
        }
        return null;
    };

    return (
        <div className="product-page-container">
            <h1 style={{ textAlign: "center" }}>{product.title}</h1>
            {product.image && product.image.url ? (
                <img
                    src={product.image.url}
                    alt={product.image.alt}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                        objectFit: "contain",
                    }}
                />
            ) : (
                <p>No image available</p>
            )}
            <p style={{ textAlign: "center" }}>{product.description}</p>
            <p style={{ textAlign: "center" }}>Price: {product.discountedPrice} NOK</p>
            {product.price > product.discountedPrice && (
                <>
                    <p style={{ textAlign: "center" }}>Discount: {calculateDiscount()}</p>
                    <p style={{ textAlign: "center" }}>You save: {calculateSavings()} NOK</p>
                </>
            )}

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                {}
                <button
                    onClick={handleAddToCart}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#1abc9c",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Add to Cart
                </button>
                {}
                <button
                    onClick={() => navigate("/")}
                    style={{
                        padding: "10px 20px",
                        marginLeft: "10px",
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Back to Products
                </button>
            </div>

            {}
            {confirmation && (
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        color: "#2ecc71",
                        fontWeight: "bold",
                    }}
                >
                    {confirmation}
                </div>
            )}

            {}
            {product.reviews && product.reviews.length > 0 ? (
                <div className="product-reviews">
                    <h2 style={{ textAlign: "center" }}>Reviews</h2>
                    <ul style={{ maxWidth: "600px", margin: "0 auto", padding: "0", listStyleType: "none" }}>
                        {product.reviews.map((review) => (
                            <li
                                key={review.id}
                                style={{
                                    backgroundColor: "#f9f9f9",
                                    padding: "10px",
                                    margin: "10px 0",
                                    borderRadius: "5px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <strong>{review.username.replace(/\.$/, "")}</strong>: {review.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p style={{ textAlign: "center" }}>No reviews available for this product.</p>
            )}
        </div>
    );
}

export default ProductPage;





