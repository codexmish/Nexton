import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'

const CommonDetails = ({icon, title, text}) => {
  return (
    <>
    <div className="main flex items-center gap-6 px-10">
        <div className="icon text-primary text-3xl">
            {icon}
        </div>
        <div className="text">
            <h2 className='text-[18px] text-primary font-popppind font-semibold'>{title}</h2>
            <p className='text-sm text-secoundary font-normal font-popppind mt-1'>{text}</p>
        </div>
    </div>
    
    </>
  )
}

export default CommonDetails