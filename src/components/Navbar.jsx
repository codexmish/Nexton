import React from 'react'
import logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
    <nav className='mt-8 mb-9'>
      <div className="container">
        <div className="main flex items-center justify-between">
          <div className="logo w-[119px]">
            <img src={logo} alt="logo" />
          </div>

          <div className="serch-box flex items-center gap-3 border-none outline-none bg-[#F8F8F8] w-100 h-13 px-6 py-4 rounded-3xl">
            <CiSearch className='text-2xl text-secoundary'/>
            <input type="text"  placeholder='Search in products...' className='border-none outline-none text-[14px] text-primary font-normal font-popppind placeholder:text-secoundary'/>
          </div>

          <div className="icons flex items-center gap-6">
            <button className='cursor-pointer'><RiUserLine className='text-2xl text-secoundary'/></button>
            <button className='cursor-pointer'><BsCartDash className='text-2xl text-secoundary'/></button>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar