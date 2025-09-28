import React from 'react'
import CommonHead from './Common/CommonHead'

const Exploring = () => {
  return (
    <>
    <section className='exploeing'>
        <div className="container">
            <CommonHead head={"For Men's"} text={"Starting at $24"} linkk={'/'}/>
            <CommonHead head={"For Women's"} text={"Starting at $19"} linkk={'/'}/>
            <CommonHead head={"Accessories"} text={"Explore accessories"} linkk={'/'}/>
        </div>

    </section>
    
    </>
  )
}

export default Exploring