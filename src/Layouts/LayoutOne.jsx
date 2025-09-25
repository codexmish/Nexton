import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import ResNav from '../components/ResNav'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResNav/>
    <Outlet/>
    
    </>
  )
}

export default LayoutOne