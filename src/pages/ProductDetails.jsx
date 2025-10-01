import React from "react";
import { BsStars } from "react-icons/bs";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";

const ProductDetails = () => {
  return (
    <>
      <section id="productdetails" className="pt-10 pb-13">
        <div className="container">
          <div className="product-row flex justify-between">
            {/* ------------Product image part----- */}
            <div className="product-images flex gap-6 pb-13 border-b border-b-border">
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

                <div className="price text-end">
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

              <div className="det flex items-center justify-between mt-8 pb-4 border-b border-b-border">
                <div className="l-text mb-[10px]">
                  <p className="text-base text-secoundary font-normal font-popppind">$169.99 x 1</p>
                  <p className="text-base text-secoundary font-normal font-popppind">Tax estimate</p>
                </div>
                <div className="r-text mb-[10px] text-end">
                  <p className="text-base text-secoundary font-normal font-popppind">$169.99</p>
                  <p className="text-base text-secoundary font-normal font-popppind">$0</p>
                </div>
              </div>

              <div className="total flex items-center justify-between mt-4">
                <h2 className="text-base text-primary font-semibold font-popppind">Total</h2>
                <h2 className="text-base text-primary font-semibold font-popppind">$169.99</h2>
              </div>


            </div>
          </div>


          {/* ---Product description---- */}

          <div className="mt-[108px] flex flex-col gap-15">
            <div>
            <h2 className="text-4xl text-primary font-semibold font-popppind">Black Automatic Watch</h2>
            <p className="text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>

            </div>

            <div>
            <h2 className="text-4xl text-primary font-semibold font-popppind">Fabric + Care</h2>
            <p className="text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">Material: Soft wool blend</p>
            <p className="text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">Color: Various</p>

            </div>

            <div>
            <h2 className="text-4xl text-primary font-semibold font-popppind">Sale performance</h2>
            <p className="text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">Sales: 0</p>
            <p className="text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">Review Count: -</p>
            <p className="text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">Review Average: -</p>

            </div>

            <div>
            <h2 className="text-4xl text-primary font-semibold font-popppind">Keywords</h2>
            <div className="flex items-center gap-2">
              <div className="px-[14px] py-2 flex border border-border rounded-full mt-2">
                <BsStars className=""/>
                <p className="text-[12px] text-secoundary font-normal font-popppind">men's fashion</p>
              </div>

              <div className="px-[14px] py-2 flex border border-border rounded-full mt-2">
                <BsStars className=""/>
                <p className="text-[12px] text-secoundary font-normal font-popppind">winter hat</p>
              </div>

              <div className="px-[14px] py-2 flex border border-border rounded-full mt-2">
                <BsStars className=""/>
                <p className="text-[12px] text-secoundary font-normal font-popppind">colorful accessory</p>
              </div>

              <div className="px-[14px] py-2 flex border border-border rounded-full mt-2">
                <BsStars className=""/>
                <p className="text-[12px] text-secoundary font-normal font-popppind">warm headwear</p>
              </div>
            </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
