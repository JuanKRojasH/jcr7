import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CgEnter } from "react-icons/cg";

export const Cards = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Inicializa el carousel usando la API de Bootstrap
      new bootstrap.Carousel(carouselRef.current, {
        interval: 3000, // cambio automático cada 3 segundos
        ride: "carousel",
        wrap: true,
      });
    }
  }, []);

  return (
    <div id="cardsCarousel" className="carousel slide" ref={carouselRef}>
      {/* Indicadores */}
      <div className="carousel-indicators">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#cardsCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
            style={{ filter: 'invert(1)' }}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {[
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
        ].map((slide, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <div className="d-flex justify-content-center gap-3 p-3">
              {slide.map((card, cidx) => (
                <div key={cidx} className="card" style={{ width: '18rem' }}>
                  <img src={card.img} className="card-img-top" alt={card.title} style={{ textAlign: 'center' }}/>
                  <div className="card-body">
                    <h4 className="card-title">{card.title}</h4>
                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <button className="carousel-control-prev" type="button" data-bs-target="#cardsCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#cardsCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
