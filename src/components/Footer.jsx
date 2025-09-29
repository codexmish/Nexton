import React from 'react'
import logo from '../assets/images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from 'react-router';
import paypal from '../assets/images/paypal.png'
import stripe from '../assets/images/stripe.png'
import verisign from '../assets/images/verisign.png'
import visa from '../assets/images/visa.png'

const Footer = () => {
  return (
    <>

    <footer className=''>
        <div className="f1 border-t-1 border-t-[#4B5563] border-b-1 border-b-[#4B5563] py-15">
            <div className="container flex items-center justify-between flex-wrap px-10">
                <div className="col-1 mt-15 lg:mt-0">
                    <div className="logo">
                        <img src={logo} alt="" />

                        <div className="items mt-5 flex flex-col gap-3">
                        <Link to={'/'} className="item-1 flex items-center gap-2"><FaFacebook className='text-[#4676ED] text-2xl'/><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Facebook</p></Link>
                        <Link to={'/'} className="item-1 flex items-center gap-2"><TiSocialYoutubeCircular className='text-[#DA0000] text-2xl'/><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Facebook</p></Link>
                        <Link to={'/'} className="item-1 flex items-center gap-2"><FaTelegram className='text-[#1D93D2] text-2xl'/><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Facebook</p></Link>
                        <Link to={'/'} className="item-1 flex items-center gap-2"><AiFillTwitterCircle className='text-[#5A99EC] text-2xl'/><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Facebook</p></Link>
                            
                        </div>
                    </div>
                </div>


                <div className="col-2 mt-15 lg:mt-0">
                    <div className="logo">
                        <h3 className='text-[16px] text-[#111827] font-semibold font-popppind'>Getting started</h3>

                        <div className="items mt-5 flex flex-col gap-3">
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Release Notes</p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Upgrade Guide</p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Browser Support</p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Dark Mode</p></Link>
                            
                        </div>
                    </div>
                </div>


                <div className="col-3 mt-15 lg:mt-0">
                    <div className="logo">
                        <h3 className='text-[16px] text-[#111827] font-semibold font-popppind'>Explore</h3>

                        <div className="items mt-5 flex flex-col gap-3">
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Prototyping</p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Design systems</p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Pricing</p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Security</p></Link>
                            
                        </div>
                    </div>
                </div>


                <div className="col-4 mt-15 lg:mt-0">
                    <div className="logo">
                        <h3 className='text-[16px] text-[#111827] font-semibold font-popppind'>Community</h3>

                        <div className="items mt-5 flex flex-col gap-3">
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Discussion Forums </p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Code of Conduct</p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>Contributing</p></Link>
                        <Link to={'/'}><p className='text-[16px] text-[#4B5563] font-normal font-popppind'>API Reference</p></Link>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="f2 py-9 container lg:flex  items-center justify-between">
            <div className="text">
                <p className='text-sm lg:text-[16px] text-[#4B5563] font-normal font-popppind text-center pb-3'>Nexton eCommerce. © 2024</p>
            </div>

            <div className="brand flex items-center justify-center gap-1">
                <Link className="brand-1">
                    <img src={visa} alt="brand" />
                </Link>
                <Link className="brand-2">
                    <img src={paypal} alt="brand" />
                </Link>
                <Link className="brand-3">
                <img src={stripe} alt="brand" /> </Link>
                <Link vclassName="brand-4">
                    <img src={verisign} alt="brand" />
                </Link>
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer