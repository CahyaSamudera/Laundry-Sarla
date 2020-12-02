import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <FeatureContainer>
      <h1 data-aos='fade-down'>Bersih dan Wangi Setiap Hari</h1>
      <p data-aos='fade-up'>
        Selalu tampil dengan pakaian kinclong dan nyaman setiap saat
      </p>
      <FeatureButton
        to='contact'
        smooth={true}
        duration={1000}
        data-aos='fade-down'
      >
        Hubungi Kami
      </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
