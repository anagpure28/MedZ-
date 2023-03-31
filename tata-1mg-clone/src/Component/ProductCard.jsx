import React from "react";
import prodstyles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard({ title, rating, price, discountprice, images, id }) {
  return (
    <Link to={`${id}`}>
      <div className={prodstyles.prodBox}>
        <img src={images[0]} alt={title} />
        <p className={prodstyles.prodName}>{title}</p>
        <div className={prodstyles.ratingDiv}>
          <div>{rating} ★</div>
          <p>{`${Math.floor(Math.random() * (500 - 5 + 1)) + 5} ratings`}</p>
        </div>
        <div className={prodstyles.ratingDiv}>
          <p
            style={{
              textDecoration: "line-through",
            }}
          >
            MRP {price}
          </p>
          <p id={prodstyles.discount}>
            {Math.floor(((price - discountprice) / price) * 100)}% OFF
          </p>
        </div>
        <div className={prodstyles.priceDiv}>
          <p>₹{discountprice}</p>
          <button>View</button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
