import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router'

const CommonBanner = () => {
  return (
    <>
    <div className=''>
        <div className="container">
        <h3 className='text-[20px] text-secoundary font-medium font-popppind'>Starting from: $49.99</h3>
        <h2 className='w-[632px] text-[64px] text-primary font-semibold font-popppind'>Exclusive collection for everyone</h2>
        <Link to={'/'} className='flex justify-center items-center bg-primary text-white w-[198px] h-[64px] rounded-[9999px] gap-3'>Explore now <CiSearch className='text-6xl text-whitetext'/></Link>

        </div>

    </div>
    
    </>
  )
}

export default CommonBanner