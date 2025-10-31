import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router";
import Cart from "./Cart";
import axios from "axios";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [active, setActive] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [seachInput, setSeachInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    setTimeout(() => {
      axios
        .get(`https://dummyjson.com/products/search?q=${seachInput}`)
        .then((res) => {
          setSearchResult(res.data.products);
          setShowRes(true);
        })
        .catch((err) => console.log(err));
    }, 500);
  };

  const handleNavigate = (id) => {
    setShowRes(false);
    navigate(`/productdetails/${id}`);
    setSeachInput("");
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
                onChange={(e) => {
                  setSeachInput(e.target.value), handleSearch();
                }}
                type="text"
                value={seachInput}
                placeholder="Search in products..."
                className="border-none outline-none w-full text-[14px] text-primary font-normal font-popppind placeholder:text-secoundary"
              />
              {showRes && (
                // ---------Search resullt
                <div className="w-full max-h-[600px] overflow-y-scroll bg-gray-300 top-20 absolute z-10 rounded-[10px]">
                  {searchResult?.map((item, key) => (
                    <div
                      onClick={() => handleNavigate(item.id)}
                      className="w-full h-15 px-4 flex items-center cursor-pointer gap-4"
                      key={key}
                    >
                      <div className="img w-10 h-10 rounded-[5px">
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <div>
                        <h2 className="text-base text-primary font-medium font-popppind">
                          {item.title}
                        </h2>
                        <p className=" text-xs text-primary font-medium font-popppind">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
