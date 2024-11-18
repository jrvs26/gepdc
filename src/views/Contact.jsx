import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function Contact() {
    React.useEffect(() => {
        document.title = "Contact Us";
    }, []);
  return (
    <>
        <Navbar />
        <h1 className='text-center font-semibold text-7xl mt-32 mb-4 sm:text-2xl md:text-2xl'>Contact Us</h1>
        <ContactForm />
        <Footer />
    </>
  )
}

export default Contact
