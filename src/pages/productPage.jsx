import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage({ addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <button
                onClick={() => addToCart(product)}
                style={{
                    display: "block",
                    margin: "20px auto",
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
        </div>
    );
}

export default ProductPage;



