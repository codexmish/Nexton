import React from 'react'

const CommonBanner = ({bg}) => {
  return (
    <>
    <div className={`${bg}`}>
        <div className="container">
        <h3 className='text-[20px] text-secoundary font-medium font-popppind'>Starting from: $49.99</h3>

        </div>

    </div>
    
    </>
  )
}

export default CommonBanner