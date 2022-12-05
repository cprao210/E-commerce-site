import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import ProductFilter from "../../components/ProductFilter";
import { getProducts } from "../../services/productsApi";
import "./Home.scss";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [reflectproducts, setReflectproductsProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
      setReflectproductsProducts(data.products);
    });
  }, []);

  const HandlesetReflectproductsProducts = (value) => {
    setReflectproductsProducts(value);
  };

  return (
    <div className="products">
      <div className="left">
        <ProductFilter
          products={products}
          reflectproducts={reflectproducts}
          HandlesetReflectproductsProducts={HandlesetReflectproductsProducts}
        />
      </div>
      <div className="right">
        <div className="list">
          {reflectproducts.map((item, i) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
