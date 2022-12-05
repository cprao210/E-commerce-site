import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingChip from "../../common-components/RatingChip";
import { getProducts } from "../../services/productsApi";
import "./Product.scss";

const Product = () => {
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);

  const [products, setProducts] = useState({});
  const [selectedImg, setSelectedImg] = useState(products.thumbnail);
  useEffect(() => {
    getProducts().then((data) => {
      console.log(
        data.products.filter((d, i) => d.id == id),
        id
      );
      setProducts(
        data.products.filter((d, i) => {
          console.log(d);
          return d.id == id;
        })[0]
      );
      setSelectedImg(
        data.products.filter((d, i) => {
          console.log(d);
          return d.id == id;
        })[0].thumbnail
      );
    });
  }, [id]);
  console.log(selectedImg, products);

  return (
    <div className="product">
      {" "}
      {products.images ? (
        <>
          <div className="left">
            <div className="images">
              {products.images.map((d, i) => {
                return (
                  <img
                    src={d}
                    alt=""
                    onClick={() => {
                      setSelectedImg(d);
                    }}
                  />
                );
              })}
            </div>
            <div className="mainImg">
              <img src={selectedImg} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{products?.title}</h1>
            <span>
              <RatingChip rating={products.rating} />
            </span>
            <span className="price">${products?.price}</span>
            <p>{products?.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              //   onClick={() =>
              //     dispatch(
              //       addToCart({
              //         id: data.id,
              //         title: data.attributes.title,
              //         desc: data.attributes.desc,
              //         price: data.attributes.price,
              //         img: data.attributes.img.data.attributes.url,
              //         quantity,
              //       })
              //     )
              //   }
            >
              <AddShoppingCart /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorder /> ADD TO WISH LIST
              </div>
              <div className="item">
                <Balance /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Product;
