import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <img className="hero-image" src="/images/blog.png" alt="React Blog App" />
      <h1>
        A Reader's <br /> Favourite Place
      </h1>
      <p className="hero-text">We provide high quality online resources for reading blogs.</p>
      <br />
      <p className="hero-text-second-line">Start reading some quality blogs.</p>
      <hr />
    </div>
  );
};

export default HeroSection;
