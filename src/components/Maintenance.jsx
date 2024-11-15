import React, { useState, useEffect } from 'react';

function Maintenance() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2025-10-31T00:00:00"); // Set your target date here

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <section className='py-24 relative'>
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-center gap-5 flex">
                        <div className="w-full flex-col justify-center items-center gap-6 flex">
                            <img
                                src="/maintenance.svg"
                                alt="under_maintenance_image"
                                className="object-cover w-2/4"
                            />
                            <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                                <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
                                    Please bear with us! This page is currently under maintenance.
                                </h2>
                                <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                                    It's going to take some time to fix the error. We'll be back online in:
                                </p>
                            </div>
                            <div className="flex items-start justify-center w-full gap-1 count-down-main">
                                <div className="timer">
                                    <h3 className="countdown-element days text-center text-black text-3xl font-normal font-manrope leading-normal">
                                        {timeLeft.days}
                                    </h3>
                                    <span className="text-center text-black text-sm font-normal">Days</span>
                                </div>
                                <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">:</h3>
                                <div className="timer">
                                    <h3 className="countdown-element hours text-center text-black text-3xl font-normal font-manrope leading-normal">
                                        {timeLeft.hours}
                                    </h3>
                                    <span className="text-center text-black text-sm font-normal">Hours</span>
                                </div>
                                <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">:</h3>
                                <div className="timer">
                                    <h3 className="countdown-element minutes text-center text-black text-3xl font-normal font-manrope leading-normal">
                                        {timeLeft.minutes}
                                    </h3>
                                    <span className="text-center text-black text-sm font-normal">Minutes</span>
                                </div>
                                <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">:</h3>
                                <div className="timer">
                                    <h3 className="countdown-element seconds text-center text-black text-3xl font-normal font-manrope leading-normal">
                                        {timeLeft.seconds}
                                    </h3>
                                    <span className="text-center text-black text-sm font-normal">Seconds</span>
                                </div>
                            </div>
                            <div className="w-full justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                                <a href='/home' className="sm:w-fit w-full px-3.5 py-2 bg-green-500 hover:bg-green-900 transition-all duration-300 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12H3m0 0l6-6m-6 6l6 6"
                                        />
                                    </svg>
                                    <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">Back to Home</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maintenance
