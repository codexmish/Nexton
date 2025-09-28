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
            <div className="flex items-center justify-between border border-border rounded-[16px] py-6">
                <div className="in1 border-r-2 border-r-border w-full">

          <CommonDetails icon={<LiaShippingFastSolid />} title={'Free shipping'} text={'On orders over $50.00'}/>
                </div>

                <div className="in2 border-r-2 border-r-border w-full">

          <CommonDetails icon={<MdSwapCalls />} title={'Very easy to return'} text={'Just phone number'}/>
                </div>

                <div className="in3 border-r-2 border-r-border w-full">

          <CommonDetails icon={<TfiWorld />} title={'Worldwide delivery'} text={'Fast delivery worldwide'}/>
                </div>

                <div className="in4 w-full">

          <CommonDetails icon={<RiRefund2Fill />} title={'Refunds policy'} text={'60 days return for any reason'}/>
                </div>

            </div>
        </div>
      </section>
    </>
  );
};

export default Brandinfo;
