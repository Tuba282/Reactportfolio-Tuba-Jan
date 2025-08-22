import React from 'react'
import Nav from './Components/Nav'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'

const Layout = () => {
    const location = useLocation();
    // Agar path '/projects' hai toh Nav na dikhayein
    const hideNav = location.pathname === "/projects";

    return (
        <>
            {!hideNav && <Nav />}
            <Outlet />
            <Footer/>
        </>
        // nav.jsx + outlet
    )
}

export default Layout