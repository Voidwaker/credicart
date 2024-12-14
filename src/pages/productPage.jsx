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
        <div>
            <h1>{product.title}</h1>
            {product.image && product.image.url ? (
                <img src={product.image.url} alt={product.image.alt} />
            ) : (
                <p>No image available</p>
            )}
            <p>{product.description}</p>
            <p>Price: {product.discountedPrice} NOK</p>
            {product.price > product.discountedPrice && (
                <>
                    <p>Discount: {calculateDiscount()}</p>
                    <p>You save: {calculateSavings()} NOK</p>
                </>
            )}
            <button onClick={() => addToCart(product)}>Add to Cart</button>

            {product.reviews && product.reviews.length > 0 ? (
                <div>
                    <h2>Reviews</h2>
                    <ul>
                        {product.reviews.map((review) => (
                            <li key={review.id}>
                                <strong>{review.username.replace(/\.$/, "")}</strong>: {review.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No reviews available for this product.</p>
            )}
        </div>
    );
}

export default ProductPage;


