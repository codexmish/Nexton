import React from "react";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";

const ProductDetails = () => {
  return (
    <>
      <section id="productdetails">
        <div className="container">
          <div className="product-row flex justify-between">
            {/* ------------Product image part----- */}
            <div className="product-images flex gap-6">
              <div className="flex flex-col gap-4">
                <button className="w-[140px] h-[157px] rounded-2xl overflow-hidden bg-gray-200"></button>
                <button className="w-[140px] h-[157px] rounded-2xl overflow-hidden bg-gray-200"></button>
                <button className="w-[140px] h-[157px] rounded-2xl overflow-hidden bg-gray-200"></button>
                <button className="w-[140px] h-[157px] rounded-2xl overflow-hidden bg-gray-200"></button>
              </div>
              <div className="image w-[640px] h-[678px] bg-gray-200 rounded-2xl">
                {/* <img src="" alt="" /> */}
              </div>
            </div>

            {/* ------------Product options part----- */}
            <div className="product-opt w-[460px] p-8 border border-[#E5E7EB] rounded-2xl h-fit">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#FBBF24]" />
                  <p className="text-base text-secoundary font-semibold font-popppind">
                    4.9 . 142 reviews
                  </p>
                </div>

                <div className="price">
                  <h2 className="text-2xl text-primary font-semibold font-popppind">
                    $169.99
                  </h2>
                  <h3 className="text-sm text-secoundary font-medium font-popppind line-through">
                    $199.99
                  </h3>
                </div>
              </div>


              {/* -----Product Size----- */}

              <h2 className="text-base text-primary font-semibold font-popppind">
                Size: S
              </h2>
              <div className="flex gap-2 mt-3 mb-8">
                <button className="w-[72px] h-11 border border-[#E5E7EB] rounded-xl">
                  S
                </button>
                <button className="w-[72px] h-11 border border-[#E5E7EB] rounded-xl">
                  M
                </button>
                <button className="w-[72px] h-11 border border-[#E5E7EB] rounded-xl">
                  L
                </button>
                <button className="w-[72px] h-11 border border-[#E5E7EB] rounded-xl">
                  XL
                </button>
                <button className="w-[72px] h-11 border border-[#E5E7EB] rounded-xl">
                  2XL
                </button>
              </div>


              {/* -------Add To Cart Option---- */}
              <div className="flex justify-between"> 

                {/* QTY */}
                <div className="py-2 px-3 rounded-[9999px] bg-[#E5E7EB] flex gap-4 items-center">
                    <button className="w-6 h-6 rounded-full border border-[#E5E7EB] bg-white flex justify-center items-center">
                        <FaMinus className="text-sm text-primary font-normal"/>
                    </button>
                    <h2 className="text-base text-primary font-medium font-popppind">1</h2>
                    <button className="w-6 h-6 rounded-full border border-[#E5E7EB] bg-white flex justify-center items-center">
                        <FaPlus className="text-sm text-primary"/>
                    </button>
                </div>

                {/* Cart button */}

                <button className="py-4 px-8 bg-primary text-base text-white font-medium font-popppind rounded-[9999px] flex justify-center items-center gap-2"> 
                    <HiShoppingBag />
                    Add to cart
                </button>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
