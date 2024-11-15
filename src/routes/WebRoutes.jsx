import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../views/Home";
import Contact from '../views/Contact';
import About from '../views/About';
import Projects, { Giga8, Dspp, Sspc, Tera3, Bataan, Alominos, SanIldefonso } from '../views/Projects';
import NotFound from '../views/NotFound';

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/giga8" element={<Giga8 />} />
      <Route path="/projects/dspp" element={<Dspp />} />
      <Route path="/projects/sspc" element={<Sspc />} />
      <Route path="/projects/tera-3" element={<Tera3 />} />
      <Route path="/projects/alominos" element={<Alominos />} />
      <Route path="/projects/san-ildefonso" element={<SanIldefonso />} />
      <Route path="/projects/bataan" element={<Bataan />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default WebRoutes;
