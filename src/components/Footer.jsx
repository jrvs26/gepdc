import React from 'react'
import Logo from "../assets/img/global_logo.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-300/40 shadow-xl font-sans dark:bg-gray-900 mt-auto sm:bottom-0">
            <div className="container px-6 py-6 mx-auto">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <img src={Logo} alt='Logo' className='h-48 w-48 mt-28' />
                    </div>

                    <div className='mt-28'>
                        <p className="font-semibold text-gray-500 dark:text-white cursor-default">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2 sm:text-center">
                            <Link to="/gepdc/home"> <p className="text-black font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-green-400 hover:cursor-pointer hover:text-green-500">Home</p></Link>
                            <Link to="/gepdc/projects"><p className="text-black font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-green-400 hover:cursor-pointer hover:text-green-500">Our Projects</p></Link>
                            <Link to="/gepdc/services"><p className="text-black font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-green-400 hover:cursor-pointer hover:text-green-500">Our Services</p></Link>

                        </div>
                    </div>

                    <div className='mt-28'>
                        <p className="font-semibold text-gray-500 dark:text-white cursor-default">Company Information</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to="/gepdc/about"><p className="text-black font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-green-400 hover:cursor-pointer hover:text-green-500">About Us</p></Link>
                            <p className="text-black font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-green-400 hover:cursor-pointer hover:text-green-500">Our Team</p>
                            <p className="text-black font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-green-400 hover:cursor-pointer hover:text-green-500">Careers</p>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex flex-1 gap-4 hover:cursor-pointer">

                    </div>

                    <div className="flex gap-4 hover:cursor-pointer">
                        <a href='https://www.facebook.com/Globalelectricpowerdevtcorp'><img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" /></a>
                        {/* <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" className="" width="30" height="30" alt="db" /> */}
                    </div>
                </div>
                <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 cursor-default font-medium">© 2012 Global Electric Power Development Corporation. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
