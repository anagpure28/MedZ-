import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from '../Admin/Pages/AdminLogin'
import Dashboard from '../Admin/Pages/Dashboard'
import AdminPrivateroute from '../Admin/Privateroute/AdminPrivateroute'
import Homepage from './Homepage'
import Login from './Login'
import PageNotfound from './PageNotfound'
import Payment from './Payment'
import Products from './Products'
import SignleProduct from './SignleProduct'
import Signup from './Signup'

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SignleProduct />} />
        <Route path="*" element={<PageNotfound />} />
        <Route path='/adminlogin' element={<Admin />} />
        <Route path='/dashboard' element={<AdminPrivateroute><Dashboard /></AdminPrivateroute>} />
      </Routes>

    </>
  )
}

export default AllRoutes