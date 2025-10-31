import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router";
import Cart from "./Cart";
import axios from "axios";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showRes, setShowRes] = useState(false)

  const handleSearch = (data) => {
    // console.log(data)

    setTimeout(() => {
      axios
        .get(`https://dummyjson.com/products/search?q=${data}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }, 500);
  };

  return (
    <>
      <nav className="mt-8 mb-9 hidden lg:block">
        <div className="container">
          <div className="main flex items-center justify-between">
            <Link to={"/"} className="logo w-[119px]">
              <img src={logo} alt="logo" />
            </Link>

            {/* ---------Input------ */}

            <div className="serch-box flex items-center gap-3 border-none outline-none bg-[#F8F8F8] w-100 h-13 px-6 py-4 rounded-3xl relative">
              <CiSearch className="text-2xl text-secoundary" />
              <input
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
                placeholder="Search in products..."
                className="border-none outline-none w-full text-[14px] text-primary font-normal font-popppind placeholder:text-secoundary"
              />

              <div className="w-full h-15 rounded-[10px] z-10 px-4 bg-gray-300 absolute top-20 flex items-center gap-4">
                <div className="img w-10 h-10 rounded-[5px] bg-gray-500">
                  {/* <img src="" alt="" /> */}
                </div>
                <div>
                  <h2 className="text-lg text-primary font-medium font-popppind">
                  Product Name
                </h2>
                <p className=" text-[14px] text-primary font-medium font-popppind">
                  Product catagory
                </p>
                </div>
              </div>
            </div>

            <div className="icons flex items-center gap-6">
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
        </div>

        {showCart && <Cart cartok={setShowCart} isopen={showCart} />}
      </nav>
    </>
  );
};

export default Navbar;
