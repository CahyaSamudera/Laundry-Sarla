import React from 'react';
import './slider.css';

const Slider = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
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
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='2'
              ></li>
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='info'>
                  <h1>SLIDE ONE</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='info'>
                  <h1>SLIDE TWO</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='info'>
                  <h1>SLIDE THREE</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
