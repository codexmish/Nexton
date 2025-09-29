import React from "react";
import CommonExplore from "./Common/CommonExplore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import CommonHead from "./Common/CommonHead";

const Exploring = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="exploeing pt-13 lg:pt-[168px] pb-13 lg:pb-[143px]">
        <div className="container expo">
          <CommonHead
            text1={"Start exploring. "}
            text2={"Good things are waiting for you"}
          />

          <Slider className="mt-10" {...settings}>
            <div>
              <CommonExplore
                head={"For Men's"}
                text={"Starting at $24"}
                linkk={"/"}
              />
            </div>
            <div>
              <CommonExplore
                head={"For Women's"}
                text={"Starting at $19"}
                linkk={"/"}
              />
            </div>
            <div>
              <CommonExplore
                head={"Accessories"}
                text={"Explore accessories"}
                linkk={"/"}
              />
            </div>
            <div>
              <CommonExplore
                head={"For Men's"}
                text={"Starting at $24"}
                linkk={"/"}
              />
            </div>
            <div>
              <CommonExplore
                head={"For Men's"}
                text={"Starting at $24"}
                linkk={"/"}
              />
            </div>
            <div>
              <CommonExplore
                head={"Accessories"}
                text={"Explore accessories"}
                linkk={"/"}
              />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Exploring;
