import React from "react";
import CommonDetails from "./Common/CommonDetails";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSwapCalls } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { RiRefund2Fill } from "react-icons/ri";

const Brandinfo = () => {
  return (
    <>
      <section className="pt-13 pb-8">
        <div className="container">
          <h2 className="text-primary text-base font-popppind font-semibold px-3 lg:hidden">
            Nexton® always with you
          </h2>

          <div className="flex flex-wrap items-center justify-between lg:border border-border rounded-[16px] py-6 px-3 lg:px-10">
            <div className="in1 lg:border-r-2 border-r-border">
              <CommonDetails
                icon={<LiaShippingFastSolid />}
                title={"Free shipping"}
                text={"On orders over $50.00"}
              />
            </div>

            <div className="in2 lg:border-r-2 border-r-border">
              <CommonDetails
                icon={<MdSwapCalls />}
                title={"Very easy to return"}
                text={"Just phone number"}
              />
            </div>

            <div className="in3 lg:border-r-2 border-r-border w-[300px] lg:w-[303px] mt-6">
              <CommonDetails
                icon={<TfiWorld />}
                title={"Worldwide delivery"}
                text={"Fast delivery worldwide"}
              />
            </div>

            <div className="in4 mt-6">
              <CommonDetails
                icon={<RiRefund2Fill />}
                title={"Refunds policy"}
                text={"60 days return for any reason"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brandinfo;
