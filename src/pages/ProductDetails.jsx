import React from 'react'

const ProductDetails = () => {
  return (
    <>
    <section id='productdetails'>
        <div className="container">
            <div className="product-row">
                {/* ------------Product image part----- */}
                <div className="product-images flex gap-6">
                    <div className='flex flex-col gap-4'>
                        <button className='w-[140px] h-[157px] rounded-2xl overflow-hidden bg-gray-200'></button>
                        <button className='w-[140px] h-[157px] rounded-2xl overflow-hidden bg-gray-200'></button>
                        <button className='w-[140px] h-[157px] rounded-2xl overflow-hidden bg-gray-200'></button>
                        <button className='w-[140px] h-[157px] rounded-2xl overflow-hidden bg-gray-200'></button>
                    </div>
                    <div className="image w-[640px] h-[678px] bg-gray-200 rounded-2xl">
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default ProductDetails