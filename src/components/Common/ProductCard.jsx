import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({image ,title ,price ,category ,discount ,rating ,stock}) => {
  // // -----------Text Truncation PRO process

  // function truncateText(text, maxLength) {
  // if (!text) return "";
  // return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  // }

  // -----------Text Truncation gorib process

  function truncateText(text, maxLength) {
    if (!text) {
      return "";
    } else if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  return (
    <>
      <div className="w-fit lg:w-[309px] h-[448px]">
        <div className="w-full h-[337px] bg-gray-100 rounded-2xl overflow-hidden">
          <img src={image} alt="ItemImage" />
        </div>
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-base text-black font-semibold font-popppind">
            {truncateText(title, 20)}
          </h2>
          <h2 className="text-base text-black font-semibold font-popppind">
            {price}
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-[14px] text-black font-normal font-popppind">
            {category}
          </p>
          <p className="line-through text-[14px] text-black font-normal font-popppind">
            {discount}
          </p>
        </div>

        <div className="flex items-center gap-1 mt-4">
          <FaStar className="text-[#FBBF24] text-xl" />
          <p className="text-[14px] text-black font-normal font-popppind">
            {rating}({stock})
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
