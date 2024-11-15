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
        <h1 className='text-center font-semibold text-7xl mt-52 mb-4'>Contact Us</h1>
        <ContactForm />
        <Footer />
    </>
  )
}

export default Contact
