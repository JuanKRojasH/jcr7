import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./About.css";

export const Carrousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new bootstrap.Carousel(carouselRef.current, {
        interval: 3000,
        ride: "carousel",
        wrap: true
      });
    }
  }, []);

  return (
    <div id="carouselExample" className="carousel slide" ref={carouselRef}>
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="/img1.jpeg" className="carrousel-image d-block" alt="1" />
        </div>

        <div className="carousel-item">
          <img src="/img2.png" className="carrousel-image d-block" alt="2" />
        </div>

        <div className="carousel-item">
          <img src="/img3.jpg" className="carrousel-image d-block" alt="3" />
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" style={{ filter: "invert(1)" }}></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" style={{ filter: "invert(1)" }}></span>
      </button>

    </div>
  );
};