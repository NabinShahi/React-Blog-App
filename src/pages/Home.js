import React from 'react';
import Blogs from '../components/Blogs';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Blogs />
    </div>
  );
};

export default Home;
