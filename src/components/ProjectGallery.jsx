import React from 'react';

import { HeroParallax } from '../assets/ui/hero-parallax';
import Giga from "../assets/img/giga.jpg"
import Sspc from "../assets/img/sspc.jpg"
import Dspp from "../assets/img/dspp.jpg"
import Maintenance from '../assets/img/maintenance.jpg';

const products = [
    {
      title: "Giga 8 projects",
      link: "/projects/giga8",
      thumbnail:
        Giga,
    },
    {
      title: "SSpc Project",
      link: "/projects/sspc",
      thumbnail:
        Sspc,
    },

    {
      title: "Dspp Project",
      link: "/projects/dspp",
      thumbnail:
        Dspp,
    },
    {
      title: "Bataan Project",
      link: "/projects/bataan",
      thumbnail:
        Maintenance,
    },
    {
      title: "San Ildefonso Project",
      link: "/projects/san-ildefonso",
      thumbnail:
      Maintenance,
    },
    {
        title: "Alominos Laguna Project",
        link: "/projects/alominos",
        thumbnail:
        Maintenance,
      },
  ];

const Gallery = () => {

    return (
        <section className='z-50'>
            <HeroParallax products={products} />
        </section>

    );
};

export default Gallery;
