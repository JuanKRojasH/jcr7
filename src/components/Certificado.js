import React from 'react'
import './About.css'

export const Certificado = () => {
  return (
    <section id="Certificado" className="size-container">
      <h3 className="about-title">Certificaciones</h3>

      {/* RCP */}
      <div className='grid-container'>
        <div className='bodyycerts'>
          <h4>Curso básico de RCP y uso de DEA (octubre de 2025)</h4>
          <h4><mark>Válido hasta noviembre de 2026</mark></h4>
        </div>

        <div className='grid-item'>
          <img
            src="/img4.png"
            alt="Certificado RCP"
            className="certificado-image"
            height="400px"
            width="500px"
          />
        </div>
      </div>

      {/* Power BI */}
       <div className='grid-container'>
      <div className='grid-item'>
          <img
            src="openAcademy.png"
            alt="Certificado Power BI"
            className="certificado-image"
            height="400px"
            width="500px"
          />
        </div>
     

     
        <div className='bodyycerts'>
          <h4>Certificación en Power BI</h4>
          <h4>Visualización y análisis de datos con dashboards interactivos</h4>
          
          <h5><mark>Certificacion otorgada por Santander Open Academy</mark></h5>
          <br/>
          <br/>
          <div className='bodyycerts'>
          <h4>Certificación en Excel Avanzado</h4>
          <h4>Uso de tablas dinámicas, análisis de datos y automatización</h4>
          <h5><mark>Certificacion otorgada por Santander Open Academy</mark></h5>
        </div>
        </div>

         </div>

  


    </section>
  )
}