import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import TeamSec from '../components/TeamSec';
import WhoWeAre from '../components/WhoWeAre';

function Home() {

    React.useEffect(() => {
        document.title = "Global Electric Power Devt Corp";
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <Navbar />
        <Hero />
        <WhoWeAre />
        <TeamSec />
        <Footer />
    </>
  )
}

export default Home
