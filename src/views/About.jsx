import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import WhoWeAre from '../components/WhoWeAre';




function About() {

    React.useEffect(() => {
        document.title = "About GEPDC";
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">About our <mark className="px-2 text-black bg-yellow-500 rounded-xl">Company</mark></h1>
        <WhoWeAre />
        <Footer />
    </>
  )
}

export default About
