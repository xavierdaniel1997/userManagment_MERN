import React from 'react'
import Navbar from '../components/Navbar.js/Navbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
} 

export default UserLayout