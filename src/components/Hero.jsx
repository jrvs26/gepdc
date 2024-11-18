import React, { useEffect, useState } from 'react';
import gigImg from "../assets/img/giga.jpg";
import dspp from "../assets/img/dspp1.jpg";
import sspc from "../assets/img/sspc.jpg";

const slides = [
    {
        id: 1,
        image: gigImg,
        text: (
            <>
                Power your world sustainably with
                <span className="text-indigo-500 font-medium"> Global </span>
                <span className="text-red-500 font-medium">Electric </span>
            </>
        ),
        tooltip: 'GIGA',
    },
    {
        id: 2,
        image: dspp,
        text: 'Eco-friendly electricity that lights up your life!',
        tooltip: 'DSPP',
    },
    {
        id: 3,
        image: sspc,
        tooltip: 'SSPC',
        text: 'Empower communities and protect the Planet',
    },
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(slides[0].image);
    const [fade, setFade] = useState(false);
    const [isCarouselActive, setIsCarouselActive] = useState(true);
    const [visibleTooltip, setVisibleTooltip] = useState(null); // State to manage tooltip visibility

    useEffect(() => {
        if (!isCarouselActive) return;

        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setBackgroundImage(slides[(currentIndex + 1) % slides.length].image);
                setFade(false);
            }, 800);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isCarouselActive]);

    const handleImageSelect = (image) => {
        setFade(true);
        setTimeout(() => {
            setBackgroundImage(image);
            setIsCarouselActive(false);
            setFade(false);
        }, 1000);

        setTimeout(() => {
            setIsCarouselActive(true);
            setCurrentIndex(slides.findIndex(slide => slide.image === image));
            setBackgroundImage(image);
        }, 10000);
    };

    return (
        <section className='relative w-full h-screen overflow-hidden'>
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover ${fade ? 'opacity-0' : 'opacity-100'}` }
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="absolute inset-0 flex items-center justify-end bg-black bg-opacity-50">
                            <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-light mr-10 animate-textFade text-right mt-48 cursor-default w-96">
                                {slide.text}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating Images in Top Left with Tooltip */}
            <div className="absolute top-56 left-4 flex flex-col">
                {slides.map((slide, index) => (
                    <div className="relative" key={index}>
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-28 h-24 rounded-lg border my-2 border-gray-600 shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => handleImageSelect(slide.image)}
                            onMouseEnter={() => setVisibleTooltip(index)} // Show tooltip on hover
                            onMouseLeave={() => setVisibleTooltip(null)} // Hide tooltip on mouse leave
                        />
                        <span
                            className={`absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded p-1 transition-opacity duration-300
                            ${visibleTooltip === index ? 'opacity-100 animate-textFade' : 'opacity-0'}
                            `}
                        >
                            {slide.tooltip}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;
