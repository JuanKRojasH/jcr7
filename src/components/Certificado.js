import React from 'react'
import './About.css'

export const Certificado = () => {
  return (
     <section id="Certificado" className="size-container">
        <h3 className="about-title">Certificaciones</h3>   
        <div className='grid-container'>
          <div className='bodyycerts'>
            <h4 className='bodyycerts'>Curso básico de RCP y uso de DEA (octubre de 2025)</h4>
             <h4> <mark>Válido hasta noviembre de 2026</mark></h4>
          </div>
          <div className='grid-item'>
            <img src="/img4.png" alt="Certificado RCP" className="certificado-image" height="400px" width="500px"/>
          </div>
        </div>
     
    </section>    
  )
}
