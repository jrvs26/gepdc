import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectGallery from '../components/ProjectGallery';
import Maintenance from '../components/Maintenance';
import Giga from "../assets/img/giga.jpg";

export function Giga8() {
    useEffect(() => {
        document.title = "Giga8 Zambales Project";
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
            <div className="flex h-screen">
                {/* Left Side - Image */}
                <div className="w-1/2">
                    <img
                        src={Giga}
                        alt="Giga project"
                        className="h-full w-full object-cover rounded-tl-[150px] rounded-br-[150px] drop-shadow-2xl ml-6"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-1/2 flex flex-col justify-start mt-12 pl-12">
                    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6 underline decoration-green-500 decoration-double">
                        Palauig Solar 2 300MW
                    </h1>

                    <div className="space-y-4 text-left">
                        {[
                            { label: "Location", value: "Palauig, Zambales" },
                            { label: "Annual Carbon Avoidance (MT CO2e)", value: "309,700" },
                            { label: "Homes Powered", value: "113,200" },
                            { label: "Project Status", value: "Under Construction" },
                            { label: "Target Date of Completion", value: "2025" },
                            { label: "Solar Panel Specification", value: "540 Wp PV modules" },
                        ].map((item, index) => (
                            <h2 key={index} className="text-2xl font-semibold text-red-400">
                                {item.label}: <span className="font-normal text-gray-800 underline decoration-green-500">{item.value}</span>
                            </h2>
                        ))}
                    </div>

                    <p className="mt-6 text-lg text-gray-700 text-left leading-relaxed decoration-black">
                        This is the description that provides more information about the content. It can elaborate on the details above, offering insights and context that enhance the viewer's understanding of the subject matter.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export function Sspc() {
    useEffect(() => {
        document.title = "San Manuel Pangasinan Project";
           }, []);
    return (
        <>
            <Navbar />
            <div className="mt-12">SSPC</div>
            <Footer />
        </>
    );
}

export function Dspp() {
    useEffect(() => {
        document.title = "Dagohoy Project";
           }, []);
    return (
        <>
            <Navbar />
            <div className="mt-12">Dspp</div>
            <Footer />
        </>
    );
}

export function Tera3() {
    useEffect(() => {
        document.title = "Infanta Project";
           }, []);
    return (
        <>
            <Navbar />
            <Maintenance />
            <Footer />
        </>
    );
}

export function Alominos() {
    useEffect(() => {
        document.title = "Alominos Project";
           }, []);
    return (
        <>
            <Navbar />
            <Maintenance />
            <Footer />
        </>
    );
}

export function SanIldefonso() {
   useEffect(() => {
document.title = "San Ildefonso Project";
   }, []);
    return (
        <>
            <Navbar />
            <Maintenance />
            <Footer />
        </>
    );
}

export function Bataan() {
    return (
        <>
            <Navbar />
            <Maintenance />
            <Footer />
        </>
    );
}

function Projects() {
    React.useEffect(() => {
        document.title = "Our Projects";
        window.scrollTo(0,0);
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
            <ProjectGallery />
            <Footer />
        </>
    );
}

export default Projects;
