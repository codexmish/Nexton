import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./Common/ProductCard";

const FragrancesLatest = () => {
  const [allProducts, setAllProducts] = useState([]);

  let fragrancesProduct = allProducts.filter(
    (item) => item.category == "fragrances"
  );

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <>
        <div className="mt-10 lg:mt-19 mb-10 flex flex-wrap items-center justify-center mx-4 gap-x-9 gap-y-12 lg:gap-y-30">
          {fragrancesProduct.map((item) => (
            <ProductCard
              key={item.id}
              image={item.thumbnail}
              title={item.title}
              price={item.price}
              discount={Math.round(
                item.price - (item.price * item.discountPercentage) / 100
              )}
              stock={item.stock}
              rating={item.rating}
            />
          ))}
        </div>
      </>
    </>
  );
};

export default FragrancesLatest;
