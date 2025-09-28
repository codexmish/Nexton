import React from "react";
import CommonExplore from "./Common/CommonExplore";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Exploring = () => {
  return (
    <>
      <section className="exploeing pt-[168px] pb-[143px]">
        <div className="container">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              dynamicBullets: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CommonExplore
                head={"For Men's"}
                text={"Starting at $24"}
                linkk={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommonExplore
                head={"For Women's"}
                text={"Starting at $19"}
                linkk={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommonExplore
                head={"Accessories"}
                text={"Explore accessories"}
                linkk={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommonExplore
                head={"For Men's"}
                text={"Starting at $24"}
                linkk={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommonExplore
                head={"For Women's"}
                text={"Starting at $19"}
                linkk={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommonExplore
                head={"Accessories"}
                text={"Explore accessories"}
                linkk={"/"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Exploring;
