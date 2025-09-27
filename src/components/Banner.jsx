import React from "react";
import CommonBanner from "./Common/CommonBanner";
import back from "../assets/images/hero.png";

const Banner = () => {
  return (
    <>
      <section id="banner" className="bg-[#f3f3f3]">
        <div className="container">
          <CommonBanner
            hero={back}
            textOne={"Starting from: $49.99"}
            textTwo={"Exclusive collection for everyone"}
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
