import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Cards = () => {
  const carouselRef = useRef(null);

  const slides = [
    [
      { title: "Power BI", img: "https://i.pinimg.com/736x/7a/f2/1e/7af21eaf89a449831a1e12d640b54fae.jpg" },
      { title: "Excel", img: "https://i.pinimg.com/736x/13/88/5f/13885f590c6070c7f106b0f19a17ab9b.jpg" },
      { title: "Reglamentacion HL7", img: "https://www.meditecs.com/wp-content/uploads/2023/07/hl7-logo.webp" }
    ],
    [
      { title: "Python", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png" },
      { title: "R", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/960px-R_logo.svg.png" },
      { title: "IBM SPSS", img: "https://www.comparasoftware.co/image-assets/412/NDEyfHdwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA5L2xvZ29JQk0tU1BTUy5wbmc.webp" }
    ],
    [
      { title: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/500px-JavaScript-logo.png" },
      { title: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png" },
      { title: "Git", img: "https://avatars.githubusercontent.com/u/18133?s=280&v=4" }
    ],
    [
      { title: "GitHub", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
      { title: "Arduino", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtg42dIkmNspEu55Lf1OGigF546QpdGuLcw&s" },
      { title: "PlatformIO", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PlatformIO_logo.svg/250px-PlatformIO_logo.svg.png" }
    ],
    [
      { title: "Mediapipe", img: "https://viz.mediapipe.dev/logo.png" },
      { title: "Impresión 3D", img: "https://i.pinimg.com/736x/6e/5a/0b/6e5a0ba3f9d8ff740e52187119889f40.jpg" },
      { title: "Corte láser", img: "https://cdn.vectorstock.com/i/1000v/22/69/laser-engraving-machine-logo-vector-22922269.jpg" }
    ]
  ];

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
    <div id="cardsCarousel" className="carousel slide" ref={carouselRef}>
      
      {/* Indicadores */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#cardsCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
            style={{ filter: "invert(1)" }}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <div className="d-flex justify-content-center gap-4 p-4 flex-wrap">
              
              {slide.map((card, cidx) => (
                <div
                  key={cidx}
                  className="card d-flex flex-column align-items-center text-center"
                  style={{ width: "18rem", padding: "20px" }}
                >
                  
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                      marginBottom: "15px"
                    }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#cardsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" style={{ filter: "invert(1)" }}></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#cardsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" style={{ filter: "invert(1)" }}></span>
      </button>

    </div>
  );
};