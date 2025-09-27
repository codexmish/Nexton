import React from "react";
import CommonBanner from "./Common/CommonBanner";
import back from "../assets/images/hero.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <section id="banner" className="bg-[#f3f3f3]">
        <div className="slide">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CommonBanner
                hero={back}
                textOne={"Starting from: $49.99"}
                textTwo={"Exclusive collection for everyone"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CommonBanner
                hero={back}
                textOne={"Starting from: $49.99"}
                textTwo={"Exclusive collection for everyone"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CommonBanner
                hero={back}
                textOne={"Starting from: $49.99"}
                textTwo={"Exclusive collection for everyone"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Banner;
