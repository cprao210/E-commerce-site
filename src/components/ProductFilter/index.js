import React, { useEffect, useState } from "react";
import "./ProductFilter.scss";

const ProductFilter = ({ products, HandlesetReflectproductsProducts }) => {
  const [selected, setselected] = useState({
    category: [],
    brand: [],
    rating: [],
    discount: [],
  });

  const sortDupticatecategory = (value) => {
    let arr = [];
    for (let index = 0; index < products.length; index++) {
      if (
        !arr.some((d, i) => {
          return d == products[index].category;
        })
      ) {
        arr.push(products[index].category);
      }
    }
    return arr;
  };

  const sortDupticateBrands = (value) => {
    let arr = [];
    for (let index = 0; index < products.length; index++) {
      if (
        !arr.some((d, i) => {
          return d == products[index].brand;
        })
      ) {
        arr.push(products[index].brand);
      }
    }
    return arr;
  };

  const categoryArr = sortDupticatecategory("category");

  const brandArr = sortDupticateBrands("category");

  const handleCategory = (value) => {
    let arr = selected.category;

    if (
      arr.some((d, i) => {
        return d == value;
      })
    ) {
      let index = arr.findIndex((d) => d == value);
      console.log(index);
      arr.splice(index, 1);
    } else {
      arr.push(value);
    }
    setselected({ ...selected, category: arr });
  };
  const handleRating = (value) => {
    let arr = selected.rating;

    if (
      arr.some((d, i) => {
        return d == value;
      })
    ) {
      let index = arr.findIndex((d) => d == value);
      console.log(index);
      arr.splice(index, 1);
    } else {
      arr.push(value);
    }
    setselected({ ...selected, rating: arr });
  };
  const handleDiscount = (value) => {
    let arr = selected.discount;

    if (
      arr.some((d, i) => {
        return d == value;
      })
    ) {
      let index = arr.findIndex((d) => d == value);
      console.log(index);
      arr.splice(index, 1);
    } else {
      arr.push(value);
    }
    setselected({ ...selected, discount: arr });
  };
  const handleBrand = (value) => {
    let arr = selected.brand;

    if (
      arr.some((d, i) => {
        return d == value;
      })
    ) {
      let index = arr.findIndex((d) => d == value);
      console.log(index);
      arr.splice(index, 1);
    } else {
      arr.push(value);
    }
    setselected({ ...selected, brand: arr });
  };

  const handleCategorySelect = (array) => {
    let category = selected.category;
    let arr = array;
    let newArr = [];
    for (let n = 0; n < category.length; n++) {
      const elementArr = category[n];
      for (let j = 0; j < arr.length; j++) {
        const categoryElement = arr[j];
        console.log(
          n,
          categoryElement.category !== elementArr,
          elementArr,
          categoryElement.category
        );
        if (categoryElement.category === elementArr) {
          console.log(
            n,
            categoryElement.category !== elementArr,
            elementArr,
            categoryElement.category
          );
          newArr.push(categoryElement);
        }
      }
    }
    console.log(newArr);
    return newArr;
  };

  const handleBrandSelect = (array) => {
    let brand = selected.brand;
    let arr = array;
    let newArr = [];
    for (let n = 0; n < brand.length; n++) {
      const elementArr = brand[n];
      for (let j = 0; j < arr.length; j++) {
        const brandElement = arr[j];
        console.log(
          n,
          brandElement.brand !== elementArr,
          elementArr,
          brandElement.brand
        );
        if (brandElement.brand === elementArr) {
          console.log(
            n,
            brandElement.brand !== elementArr,
            elementArr,
            brandElement.brand
          );
          newArr.push(brandElement);
        }
      }
    }
    console.log(newArr);
    return newArr;
  };

  const handleDiscountSelect = (array) => {
    let discount = selected.discount;
    let arr = array;
    let newArr = [];
    for (let n = 0; n < discount.length; n++) {
      const element = discount[n];
      for (let j = 0; j < arr.length; j++) {
        const Element = arr[j];

        if (parseInt(element) <= Element.discountPercentage) {
          newArr.push(Element);
        }
      }
    }
    return newArr;
  };

  const handleRatingSelect = (array) => {
    let rating = selected.rating;
    let arr = array;
    let newArr = [];
    for (let n = 0; n < rating.length; n++) {
      const element = rating[n];
      for (let j = 0; j < arr.length; j++) {
        const Element = arr[j];

        if (parseInt(element) <= Element.rating) {
          newArr.push(Element);
        }
      }
    }
    return newArr;
  };

  useEffect(() => {
    let brands = selected.brand;
    let rating = selected.rating;
    let discount = selected.discount;
    let arr = products;
    let category = selected.category;

    let categoryArr = handleCategorySelect(arr);

    if (category.length > 0) {
      arr = categoryArr;
    }
    let brandArr = handleBrandSelect(arr);

    if (brands.length > 0) {
      arr = brandArr;
    }

    let discountArr = handleDiscountSelect(arr);
    if (discount.length > 0) {
      arr = discountArr;
    }
    let ratingArr = handleRatingSelect(arr);
    if (rating.length > 0) {
      arr = ratingArr;
    }

    HandlesetReflectproductsProducts(arr);
  }, [products, selected]);
  return (
    <div className="filter">
      <div className="filterArray">
        {" "}
        <div className="header">Product Categories</div>
        <div className="categories">
          {categoryArr.map((d, i) => (
            <div className="inputLabel">
              <input
                type="checkbox"
                name={d}
                id={d}
                value={d}
                onClick={(e) => {
                  handleCategory(e.target.value);
                }}
              />
              <label htmlFor={d}>{d}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="filterArray">
        {" "}
        <div className="header">Brands Categories</div>
        <div className="categories">
          {brandArr.map((d, i) => (
            <label htmlFor={d}>
              <input
                type="checkbox"
                name={d}
                id={d}
                value={d}
                onClick={(e) => {
                  handleBrand(e.target.value);
                }}
              />
              {d}
            </label>
          ))}
        </div>
      </div>

      <div className="filterArray">
        {" "}
        <div className="header">Customers Ratings</div>
        <div className="categories">
          <div className="inputLabel">
            <input
              type="checkbox"
              name="4.5 & Above"
              id="4.5"
              value={4.5}
              onClick={(e) => {
                handleRating(e.target.value);
              }}
            />
            <label htmlFor={"4.5"}>4.5 & Above</label>
          </div>
          <div className="inputLabel">
            <input
              type="checkbox"
              name="4& Above"
              id="4"
              value={4}
              onClick={(e) => {
                handleRating(e.target.value);
              }}
            />
            <label htmlFor={"4"}>4 & Above</label>
          </div>
        </div>
      </div>

      <div className="filterArray">
        <div className="header">Discount</div>
        <div className="categories">
          <div className="inputLabel">
            <input
              type="checkbox"
              name="5 % or more"
              id="5"
              value={5}
              onClick={(e) => {
                handleDiscount(e.target.value);
              }}
            />
            <label htmlFor={"5"}>5 % or more</label>
          </div>

          <div className="inputLabel">
            <input
              type="checkbox"
              name="10% or more"
              id="10"
              value={10}
              onClick={(e) => {
                setselected({ ...selected, price: e.target.value });
              }}
            />
            <label htmlFor={"10"}>10% or more</label>
          </div>

          <div className="inputLabel">
            <input
              type="checkbox"
              name="15% or more"
              id="15"
              value={15}
              onClick={(e) => {
                handleDiscount(e.target.value);
              }}
            />
            <label htmlFor={"15"}>15% or more</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
