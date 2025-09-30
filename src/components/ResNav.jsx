import React, { useState } from "react";
import logo from "../assets/images/favicon.png";
import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router";
import Cart from "./Cart";
import { MdMenu } from "react-icons/md";

const ResNav = () => {
  const [showCart, setShowCart] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <nav className="mt-8 mb-9 px-3 lg:hidden">
        <div className="container">
          <div className="main flex items-center justify-between">
            <Link to={"/"} className="logo w-[24px]">
              <img src={logo} alt="logo" />
            </Link>

            <div className="serch-box flex items-center gap-3 border-none outline-none bg-[#F8F8F8] w-50 h-9 px-6 py-4 rounded-3xl">
              <CiSearch className="text-2xl text-secoundary" />
              <input
                type="text"
                placeholder="Search in products..."
                className="border-none outline-none text-[14px] text-primary font-normal font-popppind placeholder:text-secoundary"
              />
            </div>

            <div className="icons flex items-center gap-6">
              <button
                onClick={() => setShowButton(!showButton)}
                className="cursor-pointer relative"
              >
                <MdMenu className="text-2xl text-secoundary" />
              </button>
            </div>
          </div>

          {showButton && (
            <div className="">
              <div className="flex items-center justify-center mt-6">
                <button className="cursor-pointer">
                  <RiUserLine className="text-2xl text-secoundary" />
                </button>
                <button
                  onClick={() => setShowCart(true)}
                  className="cursor-pointer relative"
                >
                  <BsCartDash className="text-2xl text-secoundary" />
                  <div className="h-5 w-5 rounded-full bg-[#0EA5E9] flex justify-center items-center absolute top-[-8px] right-[-8px]">
                    3
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {showCart && <Cart cartok={setShowCart} isopen={showCart} />}
      </nav>
    </>
  );
};

export default ResNav;
