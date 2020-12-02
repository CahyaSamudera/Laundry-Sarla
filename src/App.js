import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonials/Testimonial';
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Paket Layanan Spesial' data={productData} />
      <Feature />
      <Products heading='Paket Layanan Umum' data={productDataTwo} />
      <Testimonial />
      <Contact />
      <Footer />
      <Whatsapp />
    </Router>
  );
}

export default App;
