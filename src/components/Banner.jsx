import React from "react";
import "slick-carousel/slick/slick.css";
import CommonBanner from "./Common/CommonBanner";
import back from "../assets/images/hero.png";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section className="banner bg-[#f3f3f3]">
        <Slider {...settings}>
          <div>
            <CommonBanner
              hero={back}
              textOne={"Starting from: $49.99"}
              textTwo={"Exclusive collection for everyone"}
            />
          </div>
          <div>
            <CommonBanner
              hero={back}
              textOne={"Starting from: $49.99"}
              textTwo={"Exclusive collection for everyone"}
            />
          </div>
          <div>
            <CommonBanner
              hero={back}
              textOne={"Starting from: $49.99"}
              textTwo={"Exclusive collection for everyone"}
            />
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Banner;
