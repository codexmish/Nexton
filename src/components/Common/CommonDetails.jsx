import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

const CommonDetails = ({ icon, title, text }) => {
  return (
    <>
      <div className="main flex items-center gap-2 lg:gap-6 w-fit lg:w-[303px]">
        <div className="icon text-secoundary lg:text-primary text-base lg:text-3xl">
          {icon}
        </div>
        <div className="text">
          <h2 className="text-sm lg:text-[18px] text-secoundary lg:text-primary font-popppind font-normal lg:font-semibold">
            {title}
          </h2>
          <p className="text-sm text-secoundary font-normal font-popppind mt-1 hidden lg:block">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default CommonDetails;
