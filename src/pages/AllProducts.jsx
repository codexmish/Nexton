import { Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/Common/ProductCard";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState();
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0)

  console.log(allProducts);

  const onShowChange = (current, pageSize) => {
    setLimit(pageSize);

    const skipmath = (current-1)* pageSize

    setSkip(skipmath)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,rating,stock,category,discountPercentage,thumbnail`
      )
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err));
  }, [limit, skip]);

  return (
    <>
      <div className="allproducts">
        <div className="container">
          <div className="flex gap-5 flex-wrap mt-10">
            {allProducts?.products.map((item, key) => (
              <ProductCard
                key={key}
                title={item.title}
                category={item.category}
                image={item.thumbnail}
                price={item.price}
                rating={item.rating}
                stock={item.stock}
                discount={item.discountPercentage}
              />
            ))}
          </div>

          <div className="my-10">
            <Pagination
              defaultCurrent={1}
              total={allProducts?.total}
              align={"end"}
              onChange={onShowChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
