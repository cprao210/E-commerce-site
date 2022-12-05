import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import RatingChip from "../../common-components/RatingChip";

const ProductCard = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.thumbnail} alt="" className="mainImg" />
          <img
            src={
              item.images.length > 1
                ? item.images[item.images.length - 2]
                : item.images.length[0]
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.title}</h2>
        <div>
          <RatingChip rating={item.rating} />
        </div>

        <div className="prices">
          <h3>${item?.price}</h3>
          <h3>{item?.discountPercentage}% off</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
