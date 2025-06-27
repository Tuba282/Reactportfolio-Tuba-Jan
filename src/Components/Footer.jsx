import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-white sm:py-4 sm:px-3 p-2">
                <p className="text-sm text-center font-[Quicksand]">© {new Date().getFullYear()} Made with Tuba Jan. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer