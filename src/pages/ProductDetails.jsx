import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import CommonHead from "../components/Common/CommonHead";
import Recommendation from "../components/Recommendation";
import Slider from "react-slick";
import axios from "axios";
import ProductCard from "../components/Common/ProductCard";

const ProductDetails = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // console.log(window)
      const w = window.innerWidth;
      if (w <= 360) setSlidesToShow(1);
      else if (w <= 620) setSlidesToShow(1);
      else if (w <= 768) setSlidesToShow(2);
      else if (w <= 1024) setSlidesToShow(2);
      else if (w <= 1289) setSlidesToShow(4);
      else setSlidesToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 4,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  const [allProductes, setAllProduces] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAllProduces(res.data.products);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section id="productdetails" className="pt-10 pb-13">
        <div className="container">
          <div className="product-row flex justify-between flex-wrap px-3 lg:px-0">
            {/* ------------Product image part----- */}
            <div className="product-images flex gap-6 pb-13 border-b border-b-border flex-wrap ">
              <div className="flex lg:flex-col gap-2 lg:gap-4 order-2 lg:order-0">
                <button className="w-[70px] lg:w-[140px] h-[78px] lg:h-[157px] rounded-2xl overflow-hidden bg-gray-200"></button>
                <button className="w-[70px] lg:w-[140px] h-[78px] lg:h-[157px] rounded-2xl overflow-hidden bg-gray-200"></button>
                <button className="w-[70px] lg:w-[140px] h-[78px] lg:h-[157px] rounded-2xl overflow-hidden bg-gray-200"></button>
                <button className="w-[70px] lg:w-[140px] h-[78px] lg:h-[157px] rounded-2xl overflow-hidden bg-gray-200"></button>
              </div>
              <div className="image w-[312px] lg:w-[640px] h-[330px] lg:h-[678px] bg-gray-200 rounded-2xl">
                {/* <img src="" alt="" /> */}
              </div>
            </div>

            {/* ------------Product options part----- */}
            <div className="product-opt w-[312px] lg:w-[460px] p-2 lg:p-8 lg:border border-[#E5E7EB] rounded-2xl h-fit">
              <h2 className="text-2xl text-primary font-semibold font-popppind lg:hidden">
                Black Automatic Watch
              </h2>
              <div className="flex justify-between items-start flex-wrap mt-3">
                <div className="flex items-center gap-1 order-2 lg:order-0 w-[300px]">
                  <FaStar className="text-[#FBBF24]" />
                  <p className="text-[12px] lg:text-base text-secoundary font-semibold font-popppind">
                    4.9{" "}
                    <span className="hidden lg:inline-block">
                      . 142 reviews{" "}
                    </span>{" "}
                    <span className="lg:hidden">(98)</span>
                  </p>
                </div>

                <div className="price lg:text-end order-1 lg:order-0 mb-6 lg:mb-0">
                  <h2 className="text-[20px] lg:text-2xl text-primary font-semibold font-popppind">
                    $169.99
                  </h2>
                  <h3 className="text-[12px] lg:text-sm text-secoundary font-medium font-popppind line-through">
                    $199.99
                  </h3>
                </div>
              </div>

              {/* -----Product Size----- */}

              <h2 className="text-base text-primary font-semibold font-popppind">
                Size: S
              </h2>
              <div className="flex flex-wrap gap-2 mt-3 mb-8">
                <button className="w-[68px] lg:w-[72px] h-9 lg:h-11 border border-[#E5E7EB] rounded-xl">
                  S
                </button>
                <button className="w-[68px] lg:w-[72px] h-9 lg:h-11 border border-[#E5E7EB] rounded-xl">
                  M
                </button>
                <button className="w-[68px] lg:w-[72px] h-9 lg:h-11 border border-[#E5E7EB] rounded-xl">
                  L
                </button>
                <button className="w-[68px] lg:w-[72px] h-9 lg:h-11 border border-[#E5E7EB] rounded-xl">
                  XL
                </button>
                <button className="w-[68px] lg:w-[72px] h-9 lg:h-11 border border-[#E5E7EB] rounded-xl">
                  2XL
                </button>
              </div>

              {/* -------Add To Cart Option---- */}
              <div className="flex justify-between">
                {/* QTY */}
                <div className="py-[2px] lg:py-2 px-[6px] lg:px-3 rounded-[9999px] bg-[#E5E7EB] flex gap-4 items-center">
                  <button className="w-5 lg:w-6 h-5 lg:h-6 rounded-full border border-[#E5E7EB] bg-white flex justify-center items-center">
                    <FaMinus className="text-[12px] lg:text-sm text-primary font-normal" />
                  </button>
                  <h2 className="text-base text-primary font-medium font-popppind">
                    1
                  </h2>
                  <button className="w-5 lg:w-6 h-5 lg:h-6 rounded-full border border-[#E5E7EB] bg-white flex justify-center items-center">
                    <FaPlus className="text-[12px] lg:text-sm text-primary" />
                  </button>
                </div>

                {/* Cart button */}

                <button className="py-[10px] lg:py-4 px-[24px] lg:px-8 bg-primary text-sm lg:text-base text-white font-medium font-popppind rounded-[9999px] flex justify-center items-center gap-2">
                  <HiShoppingBag />
                  Add to cart
                </button>
              </div>

              <div className="hidden lg:block">
                <div className="det flex items-center justify-between mt-8 pb-4 border-b border-b-border">
                  <div className="l-text mb-[10px]">
                    <p className="text-base text-secoundary font-normal font-popppind">
                      $169.99 x 1
                    </p>
                    <p className="text-base text-secoundary font-normal font-popppind">
                      Tax estimate
                    </p>
                  </div>
                  <div className="r-text mb-[10px] text-end">
                    <p className="text-base text-secoundary font-normal font-popppind">
                      $169.99
                    </p>
                    <p className="text-base text-secoundary font-normal font-popppind">
                      $0
                    </p>
                  </div>
                </div>
                <div className="total flex items-center justify-between mt-4">
                  <h2 className="text-base text-primary font-semibold font-popppind">
                    Total
                  </h2>
                  <h2 className="text-base text-primary font-semibold font-popppind">
                    $169.99
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* ---Product description---- */}

          <div className="mt-[108px] flex flex-col gap-15 px-3 lg:px-0">
            <div>
              <h2 className="text-4xl text-primary font-semibold font-popppind hidden lg:block">
                Black Automatic Watch
              </h2>
              <h2 className="text-[20px] lg:text-4xl text-primary font-semibold font-popppind lg:hidden">
                About this product
              </h2>
              <p className="text-sm lg:text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">
                The St. Louis Meramec Canoe Company was founded by Alfred
                Wickett in 1922. Wickett had previously worked for the Old Town
                Canoe Co from 1900 to 1914. Manufacturing of the classic wooden
                canoes in Valley Park, Missouri ceased in 1978.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] lg:text-4xl text-primary font-semibold font-popppind">
                Fabric + Care
              </h2>
              <p className="text-sm lg:text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">
                Material: Soft wool blend
              </p>
              <p className="text-sm lg:text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">
                Color: Various
              </p>
            </div>

            <div>
              <h2 className="text-[20px] lg:text-4xl text-primary font-semibold font-popppind">
                Sale performance
              </h2>
              <p className="text-sm lg:text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">
                Sales: 0
              </p>
              <p className="text-sm lg:text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">
                Review Count: -
              </p>
              <p className="text-sm lg:text-base text-secoundary font-normal font-popppind max-w-[735px] mt-1">
                Review Average: -
              </p>
            </div>

            <div>
              <h2 className="text-[20px] lg:text-4xl text-primary font-semibold font-popppind">
                Keywords
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <div className="px-[14px] py-2 flex border border-border rounded-full mt-2">
                  <BsStars className="" />
                  <p className="text-[12px] text-secoundary font-normal font-popppind">
                    men's fashion
                  </p>
                </div>

                <div className="px-[14px] py-2 flex border border-border rounded-full mt-2">
                  <BsStars className="" />
                  <p className="text-[12px] text-secoundary font-normal font-popppind">
                    winter hat
                  </p>
                </div>

                <div className="px-[14px] py-2 flex border border-border rounded-full mt-2">
                  <BsStars className="" />
                  <p className="text-[12px] text-secoundary font-normal font-popppind">
                    colorful accessory
                  </p>
                </div>

                <div className="px-[14px] py-2 flex border border-border rounded-full mt-2">
                  <BsStars className="" />
                  <p className="text-[12px] text-secoundary font-normal font-popppind">
                    warm headwear
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended products */}

          <div className="mt-[96px]">
            <div className="hidden lg:block">
              <CommonHead text1={"Recommended products"} />
            </div>
            <div className="lg:hidden">
              <CommonHead text1={"Recommendations"} />
            </div>

            <div className="reco mb-[96px] px-3 lg:px-0">
              <Slider className="pt-10" {...settings}>
                {allProductes.slice(0, 9).map((item) => (
                  <div>
                    <ProductCard
                      key={item.id}
                      title={item.title}
                      price={item.price}
                      category={item.category}
                      discount={item.discountPercentage}
                      rating={item.rating}
                      stock={item.stock}
                      image={item.thumbnail}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
