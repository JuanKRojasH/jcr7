  import React from 'react';
  import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

  import './Header.css';
  import './About.css';

  import orcidLogo from './2.png';

  export const Footer = () => {
    return (
      <footer id="footer" style={{ backgroundColor: "#4c4b63" }}>
        <div className="grid-footer">

    {/* Columna 1 — Contáctenos */}
    <div>
      <h5 className="footer-subtitle">Contacto</h5>
      <div className="grid-container">
      <div className='grid-item'>
      <p className="mb-1">Correo </p>
      
        </div>
        <div className='grid-item'>
      <p className="mb-1">Telefono</p>
      
              </div>

              <div className='grid-item'>
                <a
                href="mailto:juancamilorojash28@gmail.com"
                className="text-white "
              >
                <FaEnvelope size={38}/>
              </a>
                </div>
                <div className='grid-item'>
                  <a
                href="https://api.whatsapp.com/send/?phone=573153961840"
                className="text-white  d-flex align-items-center justify-content-center"
              >
                <FaWhatsapp size={39}/>
              </a>
                  </div>
    </div>
    </div>

{/* Columna 2 — Redes */}
<div className="text-center">
  <h5 className="footer-subtitle">Redes</h5>
  <br/>

  <div className="d-flex justify-content-center gap-4 mt-2">
    <a
      href="https://www.linkedin.com/in/juan-camilo-rojas-hern%C3%A1ndez-88b700272/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white"
    >
      <FaLinkedin size={32} />
    </a>

    <a
      href="https://github.com/JuanKRojasH"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white"
    >
      <FaGithub size={32} />
    </a>

   
    <a
      href="https://orcid.org/0009-0009-1899-0165"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white"
    >
      <img
        src={orcidLogo}
        alt="ORCID"
        style={{ width: '28px', height: '28px', filter: 'invert(1)' }}
      />
    </a>
  </div>
</div>


    {/* Columna 3 — Location */}
    <div>
      <h5 className="footer-subtitle">Ubicación</h5>
      <p className="mb-1"> Bogotá, Colombia</p>
      <p className="mb-1">Universidad de los Andes</p>
    </div>

  </div>

      </footer>
    );


  };
