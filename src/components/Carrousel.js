import React from 'react';
import './About.css';

export const Carrousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
   
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img1.jpeg" className=" carrousel-image" alt="1" />
        </div>

        <div className="carousel-item">
          <img src="/img2.png" className="carrousel-image" alt="2" />
        </div>

        <div className="carousel-item">
          <img src="/img3.jpg" className=" carrousel-image" alt="3"  />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          style={{ filter: 'invert(1)' }}
          aria-hidden="true"
        ></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          style={{ filter: 'invert(1)' }}
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
};
