import React from "react";
import Slider from "react-slick";

function Carousel({ products }) {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Populære Produkter</h2>
      <Slider {...settings}>
        {products.slice(0, 5).map((product) => ( 
          <div key={product.id}>
            <img
              src={product.image.url}
              alt={product.image.alt}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> {product.discountedPrice} NOK
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
