import React, { useState, useEffect } from 'react';
import Logo from "../assets/img/global_logo.png";
import { Link } from 'react-router-dom';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Handle click to toggle the menu
    const handleClick = () => setIsMenuOpen(!isMenuOpen);

    // useEffect to check document.title and conditionally set navbar sticky
    useEffect(() => {
        if (document.title !== "Global Electric Power Devt Corp" && document.title !== "About GEPDC") {
            setIsSticky(false);  // Set sticky navbar if title is not the specific one
        } else {
            setIsSticky(true); // set sticky navbar if title is "Global Electric Power Devt Corp"
        }
    }, []); // Empty dependency array ensures this runs only once after component mounts

    return (
        <header
            className={`font-[sans-serif] tracking-wide ${isSticky ? 'fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-40 backdrop-blur-md' : 'relative'}`}>
            {/* Main navbar section */}
            <section className='flex flex-col lg:items-center lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>
                <Link to="/gepdc/home" className="shrink-0">
                    <img src={Logo} alt="logo" className='md:w-[110px] w-28' />
                </Link>
            </section>

            {/* Mobile and desktop navigation */}
            <div className='flex flex-wrap justify-center px-10 py-3 relative'>
                <div id="collapseMenu" className={`lg:!block ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <button id="toggleClose" onClick={handleClick}
                        className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        {/* Close Button SVG */}
                    </button>

                    <ul className={`lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-full
                        max-lg:min-w-full max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-screen max-lg:shadow-md
                        max-lg:overflow-auto z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        {/* Logo item in mobile menu */}
                        <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
                            <Link to="/gepdc/home">
                                <img src={Logo} alt="logo" className='w-36' />
                            </Link>
                        </li>

                        {/* About Section with dropdown */}
                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <Link to='/gepdc/about' className='hover:text-green-500 text-gray-700 font-semibold text-[15px] block'>
                                About
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                                </svg>
                            </Link>
                            <ul className='absolute top-5 max-lg:top-8 left-0 z-50 rounded-xl block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[200px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li className='border-b pb-2'>
                                    <Link to='/gepdc/about' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>About Our Company</Link>
                                </li>
                                <li className='border-b py-3'>
                                    <Link to='/gepdc/teams' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>Our Teams</Link>
                                </li>
                                <li className='pt-2'>
                                    <Link to='/gepdc/careers' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>Careers</Link>
                                </li>
                            </ul>
                        </li>

                        {/* Projects Section with dropdown */}
                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <Link to='/gepdc/projects' className='hover:text-green-500 text-gray-700 font-semibold text-[15px] block'>
                                Projects
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                                </svg>
                            </Link>
                            <ul className='absolute top-5 max-lg:top-8 left-0 z-50 block rounded-xl space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[260px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li className='border-b pb-2'>
                                    <Link to='/gepdc/projects/giga8' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>GIGA 8 Project</Link>
                                </li>
                                <li className='border-b py-3'>
                                    <Link to='/gepdc/projects/sspc' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>SSPC Project</Link>
                                </li>
                                <li className='border-b py-3'>
                                    <Link to='/gepdc/projects/dspp' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>DSPP Project</Link>
                                </li>
                                <li className='pt-2'>
                                    <Link to='/gepdc/projects/tera3' className='text-gray-400 font-semibold text-[15px] block cursor-not-allowed' aria-disabled='true'>
                                        TERA 3 Project
                                        <span className='ml-1 text-gray-500 italic text-xs'>(Coming Soon)</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Services Section with dropdown */}
                        <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                            <button className='hover:text-green-500 text-gray-700 font-semibold text-[15px] block'>
                                Services
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                                </svg>
                            </button>
                            <ul className='absolute top-5 max-lg:top-8 left-0 z-50 block rounded-xl space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li className='border-b pb-2'>
                                    <Link to='/gepdc/services/solar-plant' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>Solar Power Plant</Link>
                                </li>
                                <li className='border-b py-3'>
                                    <Link to='/gepdc/services/thermal-scanning' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>Thermal Scanning</Link>
                                </li>
                                <li className='border-b py-3'>
                                    <Link to='/gepdc/services/power-system' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>Power Systems</Link>
                                </li>
                                <li className='pt-2'>
                                    <Link to='/gepdc/services/electrical-testing' className='hover:text-green-500 text-gray-600 font-semibold text-[15px] block'>Electrical Testing</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
                            <Link to='/gepdc/clients' className='hover:text-green-500 text-gray-700 font-semibold text-[15px] block'>
                                Clients
                            </Link>
                        </li>
                        {/* Contact Section */}
                        <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
                            <Link to='/gepdc/contact' className='hover:text-green-500 text-gray-700 font-semibold text-[15px] block'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile toggle button */}
                <div id="toggleOpen" className='flex ml-auto lg:hidden relative h-full z-50'>
                    <button onClick={handleClick}>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
