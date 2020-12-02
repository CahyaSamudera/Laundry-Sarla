import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  PrastaLink,
} from './FooterElements';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <FooterContainer>
      <FooterWrap data-aos='fade-up'>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Laundry Sarla
            </SocialLogo>
            <WebsiteRights>
              Powered by{' '}
              <PrastaLink
                href='https://prasta.id/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Prasta'
              >
                Prasta
              </PrastaLink>
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.instagram.com/ruheheru/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.facebook.com/herullohruhe'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://twitter.com/ruheheru_'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
