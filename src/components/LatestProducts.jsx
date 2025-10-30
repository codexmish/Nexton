import React, { useState } from "react";
import BeautyLatest from "./BeautyLatest";
import FragrancesLatest from "./FragrancesLatest";
import FurnitureLatest from "./FurnitureLatest";
import GroceriesLatest from "./GroceriesLatest";

const categories = [
  { name: "Beauty", component: BeautyLatest },
  { name: "Fragnance", component: FragrancesLatest },
  { name: "Furniture", component: FurnitureLatest },
  { name: "Groceries", component: GroceriesLatest },
];

const LatestProducts = () => {
  const [activeCat, setActiveCat] = useState("Beauty");

  // Active component find
  const activeObj = categories.find((cat) => cat.name === activeCat);
  const ActiveComponent = activeObj.component;

  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center gap-6 lg:gap-14 mt-2 text-sm lg:text-[18px] text-black font-bold lg:font-normal font-popppind">
          {categories.map((cat, id) => (
            <h2
              key={id}
              className={`cursor-pointer ${
                activeCat === cat.name ? "text-red-500" : ""
              }`}
              onClick={() => setActiveCat(cat.name)}
            >
              {cat.name}
            </h2>
          ))}
        </div>

        <div>
          <ActiveComponent />
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
