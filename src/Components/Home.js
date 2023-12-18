import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import WebMobile from "./WebMobile";
import DigitalStrategy from './DigitalStrategy';
import MainImage from './MainImage';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainImage />
      <WebMobile />
      <DigitalStrategy />
      <Footer />
    </>
  );
};

export default Home;
