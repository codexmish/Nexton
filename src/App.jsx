import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layouts/LayoutOne'
import Home from './pages/Home'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Home/>}/>


    </Route>
  ))


  return (
    <>
    <RouterProvider router={myRoute}/>
    
    </>
  )
}

export default App