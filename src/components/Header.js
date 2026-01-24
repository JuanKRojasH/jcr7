import React, { useState } from 'react';

export const Header = () => {

  const [hovered, setHovered] = useState(null);

  const linkStyle = (index) => ({
    color: hovered === index ? '##5386e4' : 'white',
    position: 'relative',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  });

  const underlineStyle = (index) => ({
    content: '""',
    position: 'absolute',
    width: hovered === index ? '100%' : '0',
    height: '2px',
    bottom: '-4px',
    left: 0,
    backgroundColor: '#5386e4',
    transition: 'width 0.3s ease'
  });

  return (
    
      <nav className="navbar sticky-top" style={{ backgroundColor: "#4c4b63", height: "80px", width: "100%" }}>
        <div className="container justify-content-center">

          <ul className="navbar-nav flex-row gap-4">

            {[
              { text: 'Inicio', href: '#Inicio' },
              { text: 'Perfil', href: '#about' },
              { text: 'Habilidades', href: '#Habilidades' },
              { text: 'Certificaciones', href: '#Certificado' },
              { text: 'Publicaciones', href: '#Publicaciones' },
              { text: 'Contacto', href: '#footer' }
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={item.href}
                  className="nav-link"
                  style={linkStyle(index)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.text}
                  <span style={underlineStyle(index)} />
                </a>
              </li>
            ))}

          </ul>
        </div>
      </nav>
   
  );
};
