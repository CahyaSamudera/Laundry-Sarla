import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Navbar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from './HeroElements';
import Sidebar from '../Sidebar';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1 data-aos='fade-down'>Laundry Terbaik</HeroH1>
          <HeroP data-aos='fade-up'>Di Kota Pamulang</HeroP>
          <HeroBtn
            to='layanan'
            smooth={true}
            duration={1000}
            data-aos='fade-in'
          >
            Layanan Kami
          </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
