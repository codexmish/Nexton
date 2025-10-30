import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layouts/LayoutOne'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import AllProducts from './pages/AllProducts'
import LatestProducts from './components/LatestProducts'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Home/>}/>
      <Route path='/productdetails/:next' element={<ProductDetails/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/allProducts' element={<AllProducts/>}/>
      <Route path='/latest' element={<LatestProducts/>}/>


    </Route>
  ))


  return (
    <>
    <RouterProvider router={myRoute}/>
    
    </>
  )
}

export default App