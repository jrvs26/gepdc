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
      <Route path="/gepdc" element={<Navigate to="/gepdc/home" />} />
      <Route path="/gepdc/home" element={<Home />} />
      <Route path="/gepdc/about" element={<About />} />
      <Route path="/gepdc/contact" element={<Contact />} />
      <Route path="/gepdc/projects" element={<Projects />} />
      <Route path="/gepdc/projects/giga8" element={<Giga8 />} />
      <Route path="/gepdc/projects/dspp" element={<Dspp />} />
      <Route path="/gepdc/projects/sspc" element={<Sspc />} />
      <Route path="/gepdc/projects/tera-3" element={<Tera3 />} />
      <Route path="/gepdc/projects/alominos" element={<Alominos />} />
      <Route path="/gepdc/projects/san-ildefonso" element={<SanIldefonso />} />
      <Route path="/gepdc/projects/bataan" element={<Bataan />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default WebRoutes;
