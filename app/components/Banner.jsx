// src/components/Banner.jsx
import React from 'react';
import './Banner.css';

const Banner = ({ title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Banner;