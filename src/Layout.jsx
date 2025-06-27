import React from 'react'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer/>
        </>
        // nav.jsx + outlet
    )
}

export default Layout