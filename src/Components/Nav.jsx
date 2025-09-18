import React, { useState } from 'react'
import { TbBrandGoogleHome } from "react-icons/tb";
import { PiCodepenLogoBold } from "react-icons/pi";
import { MdDiversity2 } from "react-icons/md";
import { LuChartNetwork } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { TbAward } from "react-icons/tb";


const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav w-20 fixed right-0 top-0  sm:top-40 z-[50]  flex justify-end items-end p-3 sm:p-2 py-0 md:py-3 overflow-hidden">
      {/* Hamburger Toggle for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center my-14 z-[50]"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span className={`block w-6 h-[1.3px] sm:w-7 sm:h-1 bg-gray-100 shadow-sm  shadow-black  rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-[1.3px] sm:w-7 sm:h-1 bg-gray-100 shadow-sm  shadow-black  rounded my-1 transition-all duration-200 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-[1.3px] sm:w-7 sm:h-1 bg-gray-100 shadow-sm  shadow-black  rounded transition-all duration-200 ${open ? '-translate-y-1 -rotate-44 sm:-translate-y-2' : ''}`}></span>
      </button>
      {/* Nav icons container */}
      <div
        className={`w-10 sm:w-15 z-[50] px-2 shadow-sm shadow-white backdrop-blur-xs bg-white/10 rounded-4xl flex flex-col gap-3 justify-center items-center transition-all duration-300 overflow-hidden xl:overflow-visible
        ${open ? 'min-h-48 py-4' : 'h-0 py-0'}
        md:h-full md:max-h-[500px] md:py-5 md:flex md:static fixed top-25 right-2 md:right-0 md:top-0
        ${open ? 'fixed' : 'md:static'}
        `}
        style={{ maxWidth: '60px' }}
      >
        {/* Home */}
        <div className="relative group flex items-center justify-center">
          <a
            href="#hero"
            className="circle bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-xs shadow-gray-700 flex justify-center items-center transition-all duration-150 hover:shadow-xs hover:-translate-y-0.5 active:shadow-inner active:translate-y-[2px] cursor-pointer"
            tabIndex={0}
            onClick={() => setOpen(false)}
          >
            <TbBrandGoogleHome className='text-md sm:text-xl' />
          </a>
          <span className="absolute -left-20   px-2 py-1 rounded shadow-sm shadow-white backdrop-blur-xs bg-white/10 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">Home</span>
        </div>
        {/* Timeline About*/}

        <div className="relative group flex items-center justify-center">
          <a
            href="#about"
            className="circle bg-white  w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-xs shadow-gray-700 flex justify-center items-center transition-all duration-150 hover:shadow-xs hover:-translate-y-0.5 active:shadow-inner active:translate-y-[2px] cursor-pointer"
            tabIndex={0}
            onClick={() => setOpen(false)}
          >
            <PiCodepenLogoBold className='text-md sm:text-xl' />
          </a>
          <span className="absolute -left-20   px-2 py-1 rounded shadow-sm shadow-white backdrop-blur-xs bg-white/10 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">Timeline</span>
        </div>
        {/* Projects */}
        <div className="relative group flex items-center justify-center">
          <a
            href="#bentoGrid"
            className="circle bg-white  w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-xs shadow-gray-700 flex justify-center items-center transition-all duration-150 hover:shadow-xs hover:-translate-y-0.5 active:shadow-inner active:translate-y-[2px] cursor-pointer"
            tabIndex={0}
            onClick={() => setOpen(false)}
          >
            <FaCode className='text-md sm:text-xl' />
          </a>
          <span className="absolute -left-20   px-2 py-1 rounded shadow-sm shadow-white backdrop-blur-xs bg-white/10 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">Projects</span>
        </div>
        {/* Testimonial */}
        <div className="relative group flex items-center justify-center">
          <a
            href="#testimonials"
            className="circle bg-white  w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-xs shadow-gray-700 flex justify-center items-center transition-all duration-150 hover:shadow-xs hover:-translate-y-0.5 active:shadow-inner active:translate-y-[2px] cursor-pointer"
            tabIndex={0}
            onClick={() => setOpen(false)}
          >
            <MdDiversity2 className='text-md sm:text-xl' />
          </a>
          <span className="absolute -left-25   px-2 py-1 rounded shadow-sm shadow-white backdrop-blur-xs bg-white/10 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">Testimonial</span>
        </div>
        {/* Skills */}
        <div className="relative group flex items-center justify-center">
          <a
            href="#skills"
            className="circle bg-white  w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-xs shadow-gray-700 flex justify-center items-center transition-all duration-150 hover:shadow-xs hover:-translate-y-0.5 active:shadow-inner active:translate-y-[2px] cursor-pointer"
            tabIndex={0}
            onClick={() => setOpen(false)}
          >
            <LuChartNetwork className='text-md sm:text-xl' />
          </a>
          <span className="absolute -left-17   px-2 py-1 rounded shadow-sm shadow-white backdrop-blur-xs bg-white/10 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">Skills</span>
        </div>
        {/* Awards / Certificates */}
        <div className="relative group flex items-center justify-center">
          <a
            href="#certificates"
            className="circle bg-white  w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-xs shadow-gray-700 flex justify-center items-center transition-all duration-150 hover:shadow-xs hover:-translate-y-0.5 active:shadow-inner active:translate-y-[2px] cursor-pointer"
            tabIndex={0}
            onClick={() => setOpen(false)}
          >
            <TbAward className='text-md sm:text-xl' />
          </a>
          <span className="absolute -left-20   px-2 py-1 rounded shadow-sm shadow-white backdrop-blur-xs bg-white/10 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">Awards</span>
        </div>
      </div>
    </div>
  )
}

export default Nav