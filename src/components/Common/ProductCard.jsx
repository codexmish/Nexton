import React from "react";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router";

const ProductCard = ({
  image,
  title,
  price,
  category,
  discount,
  rating,
  stock,
  detailsClick
}) => {
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
        <div className="w-full h-[337px] bg-gray-100 rounded-2xl overflow-hidden relative group">
          <img src={image} alt="ItemImage" />

          {/* --------hover icons--- */}

          <div className="hover-icobs cursor-pointer absolute text-white text-3xl flex flex-col gap-4 top-10 right-[-50px] group-hover:right-4 duration-[.4s] z-10">
            <button className="cursor-pointer">
              <IoBagHandleOutline />
            </button>
            <button className="cursor-pointer" onClick={detailsClick}>
              <TbListDetails />
            </button>
          </div>

          {/* --------Black overlay----- */}
          <div className="w-full h-full group-hover:bg-[#0000008f] absolute top-0 left-0 duration-[.4s]"></div>
        </div>
        <div className="flex items-center justify-between mt-5 cursor-pointer">
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
