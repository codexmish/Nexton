import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default LayoutOne