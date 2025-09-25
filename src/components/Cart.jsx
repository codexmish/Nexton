import React from "react";
import { Link } from "react-router";
import { ImCross } from "react-icons/im";

const Cart = ({ cartok }) => {
  return (
    <>
      <section className="w-full h-screen absolute top-0 left-0 z-10">
        <div
          onClick={() => cartok(false)}
          className="w-full h-screen bg-[#0000006c]"
        ></div>

        <div className="w-100 h-screen bg-white absolute top-0 right-0 p-5 ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-primary font-medium font-popppind ">
              Cart
            </h2>
            <ImCross
              className="text-2xl text-primary cursor-pointer"
              onClick={() => cartok(false)}
            />
          </div>

          <div className="w-full h-[800px] overflow-y-scroll">
            {/* ----Cart Product--- */}
            <div className="flex gap-5 items-center mt-5">
              <div className="w-10 h-10 rounded-[5px] bg-gray-200">
                {/* <img src="" alt="" /> */}
              </div>
              <div>
                <h2 className="text-lg text-primary font-medium font-popppind">
                  Product Name
                </h2>
                <p className=" text-[14px] text-primary font-medium font-popppind">
                  Product Price
                </p>
              </div>
            </div>
          </div>

          {/* ---------Checkout button and product sum */}

          <div className="flex justify-between items-center">
            <p className="tetx-[16px] text-primary font-medium font-popppind">
              SubTotal
            </p>
            <p className="tetx-[16px] text-primary font-medium font-popppind">
              $350
            </p>
          </div>

          <Link
            to={"/"}
            className="w-full py-3 rounded-[10px] mt-2 bg-primary flex justify-center items-center text-[16px] text-white font-popppind font-medium active:scale-[1.1]"
          >
            CheckOut
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
