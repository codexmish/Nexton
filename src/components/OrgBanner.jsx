import React from "react";
import boy from "../assets/images/boy.png";
import { Link } from "react-router";

const OrgBanner = () => {
  return (
    <>
      <section className="orgbanner hidden lg:block">
        <div className="container bg-[#F5F5F5] mt-33 flex justify-around items-center rounded-[30px] mb-12">
          <div className="text flex flex-col  gap-6">
            <h3 className="text-[20px] text-[#4B5563] font-medium font-popppind">
              100% Original Products
            </h3>
            <h2 className="text-4xl text-[#111827] font-semibold font-popppind w-[362px]">
              The All New Fashion Collection Items
            </h2>
            <h3 className="text-[20px] text-[#4B5563] font-medium font-popppind">
              Starting from: $59.99
            </h3>
            <Link
              to={"/latest"}
              className="text-[16px] text-white font-medium font-popppind bg-[#111827] w-[144px] h-[52px] flex justify-center items-center rounded-[50px]"
            >
              Shop now
            </Link>
          </div>
          <div className="img">
            <img src={boy} alt="boy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrgBanner;
