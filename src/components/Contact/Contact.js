import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='contact' id='contact'>
        <div className='content'>
          <h2 data-aos='fade-down'>Kontak Kami</h2>
          <p data-aos='fade-up'>
            Jika anda perlu informasi tambahan atau ada yang hendak disampaikan,
            jangan ragu untuk menghubungi kami.
          </p>
        </div>
        <div className='container-2'>
          <div className='contactInfo' data-aos='fade-up'>
            <div className='box'>
              <div className='icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='text'>
                <h3>Alamat</h3>
                <p>
                  Jl. Pamulang Raya No.5, <br /> Pamulang, Tangerang Selatan,{' '}
                  <br /> 15713
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'>
                {' '}
                <FaPhone />{' '}
              </div>
              <div className='text'>
                <h3>Telpon</h3>
                <p>089688589354</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'>
                {' '}
                <FaEnvelope />{' '}
              </div>
              <div className='text'>
                <h3>Email</h3>
                <p>laundrysarla@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='contactForm' data-aos='fade-up'>
            <form>
              <h2>Kirim Pesan</h2>
              <div className='inputBox'>
                <input type='text' name='' required />
                <span>Nama Lengkap</span>
              </div>
              <div className='inputBox'>
                <input type='text' name='' required />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea required />
                <span>Tulis Pesan Anda ...</span>
              </div>
              <div className='inputBox'>
                <input type='submit' name='' value='Kirim' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
