import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      className="text-center w-100 overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: "none",
        borderRadius: "8px",
        background: "#e9213d",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="position-relative overflow-hidden"
        style={{ height: "320px" }}
      >
        <CardImg
          top
          src={product.productData.productMainImage}
          alt={product.productName}
          className="h-100 object-fit-cover"
          style={{
            transition: "transform 0.3s ease, filter 0.3s ease",
            filter: hover ? "blur(2px)" : "none",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div
          className="position-absolute d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <h5 style={{ color: "#fff", fontWeight: "600", margin: 0 }}>
            {product.salePrice} TL
          </h5>
          <Button
            color="primary"
            style={{
              marginTop: "0.5rem",
              borderRadius: "4px",
              fontWeight: "600",
            }}
          >
            İncele
          </Button>
        </div>
      </div>
      <CardBody
        className="d-flex align-center justify-content-center"
        style={{
          background: "#e9213d",
          height: "50px",
        }}
      >
        <CardTitle
          tag="h6"
          className="mb-0 text-truncate"
          style={{ color: "#fff", fontWeight: 600 }}
        >
          {product.productName}
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
