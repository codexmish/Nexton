import React from "react";

const CommonHead = ({ text1, text2 }) => {
  return (
    <>
      <div className="pl-6 lg:pl-0">
        <h2 className="text-2xl lg:text-4xl text-primary font-popppind font-semibold">
          {text1}
          <span className="text-secoundary hidden lg:inline-block">
            {text2}
          </span>
        </h2>
      </div>
    </>
  );
};

export default CommonHead;
