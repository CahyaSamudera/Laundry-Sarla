import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import person1 from '../../images/prasta-laundry-1.png';
import person2 from '../../images/prasta-laundry-3.png';
import person3 from '../../images/prasta-laundry-5.png';
import person4 from '../../images/prasta-laundry-2.png';
import person5 from '../../images/prasta-laundry-4.png';
import person6 from '../../images/prasta-laundry-6.png';

import './testimonial.css';

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='testimonial' id='testimoni'>
      <div className='container'>
        <h2 data-aos='fade-down'>Apa Kata Pelanggan Kami</h2>
        <div className='row'>
          <div className='col-md-12'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'
                ></li>
              </ol>
              <div className='carousel-inner' data-aos='fade-up'>
                <div className='carousel-item active'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='single-box'>
                        <div className='img-area'>
                          <img src={person1} alt='person-one' />
                        </div>
                        <div className='img-text'>
                          <h2>Karina Doe</h2>
                          <p>
                            Hasil cucian dari Laundry Sarla sangat bersih dan
                            disetrika dengan rapih dan halus. Sangat puas deh
                            pokoknya.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='single-box'>
                        <div className='img-area'>
                          <img src={person2} alt='person-2' />
                        </div>
                        <div className='img-text'>
                          <h2>Sarah Doe</h2>
                          <p>
                            Saya sudah sangat sibuk dengan urusan kerjaan di
                            kantor dan saya tidak punya waktu untuk mencuci baju
                            sendiri, Laundry Sarla sangat membantu saya dalam
                            urusan ini.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='single-box'>
                        <div className='img-area'>
                          <img src={person3} alt='person-3' />
                        </div>
                        <div className='img-text'>
                          <h2>John Doe</h2>
                          <p>
                            Kualitas nomor wahid. Tidak terbantahkan dan tidak
                            pernah mengecewakan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='single-box'>
                        <div className='img-area'>
                          <img src={person4} alt='person-4' />
                        </div>
                        <div className='img-text'>
                          <h2>Jane Doe</h2>
                          <p>
                            Saya tidak perlu mengantarkan cucian saya, cukup wa
                            mereka dan mereka akan datang. Sungguh layanan yang
                            sangat memuaskan.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='single-box'>
                        <div className='img-area'>
                          <img src={person5} alt='person-5' />
                        </div>
                        <div className='img-text'>
                          <h2>James Doe</h2>
                          <p>
                            Laundry Sarla sangat membantu tugas saya sebagai
                            seorang Ibu Rumah Tangga yang juga berwirausaha.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='single-box'>
                        <div className='img-area'>
                          <img src={person6} alt='person-6' />
                        </div>
                        <div className='img-text'>
                          <h2>Jonathan Doe</h2>
                          <p>
                            Saya jarang mencuci baju sendiri karena tugas kuliah
                            terkadang sangat menumpuk. Untungnya ada Laundry
                            Sarla yang bisa diandalkan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
