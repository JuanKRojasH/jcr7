import React from 'react'
import './About.css'

export const Publicacion = () => {
  return (
    <section id="Publicaciones" className="size-container">
      <h3 className="about-title">Publicaciones</h3>
    
      <div className='grid-container'>
       
        <img 
          className="publication-image" 
          src="https://images.tandf.co.uk/common/jackets/crclarge/978100347/9781003473183.jpg" 
          alt="Artículo Publicado" 
          width="200px" 
        />
        

        <div className='body-text-container'>
    
            <span style={{ fontWeight: '400', color: '#000000' }}>Participé activamente en la redacción y el desarrollo integral del capítulo, aportando un enfoque sistemático y crítico sobre nanomateriales basados en carbono como plataformas de nanotransporte. Mi contribución incluyó el análisis, la comparación y la discusión en profundidad de diversas nanopartículas de carbono, entre ellas nanotubos de carbono, óxido de grafeno, fullerenos, carbon dots, quantum dots y otras nanoestructuras.

Se abordaron de manera detallada sus propiedades estructurales, morfológicas y fisicoquímicas, así como las principales estrategias de síntesis, modificación superficial y funcionalización química.</span>
      <br/>
     <br/>
     <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <a href='https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-6/carbon-based-nanocarriers-cristian-rodr%C3%ADguez-paula-guzm%C3%A1n-sastoque-coryna-rodriguez-bazurto-juan-rojas-hern%C3%A1ndez-luis-reyes-juan-cruz'>
            <button type="button" className="btn" style={{backgroundColor: '#5386e4', color: '#ffffff', height: '40px', gap: '10px', width: '150px' }}>Ver Publicación</button>
        </a>
        </div>
        </div>
      <br/>
      </div>
      
       <div className='grid-container'>
       
      

        <div className='body-text-container'>
            <br/>
    
            <span style={{ fontWeight: '400', color: '#000000', whiteSpace: 'pre-line' }}>En el desarrollo de la aplicación OrientApp, orientada a apoyar a personas ciegas en el contexto de una tesis, realicé el diseño experimental del estudio, así como el análisis estadístico y la interpretación de los datos obtenidos durante las pruebas de uso y validación. Participé activamente en el diseño, desarrollo y evaluación integral de la aplicación, contribuyendo a la definición de la metodología, la planificación de las pruebas y el análisis de resultados. </span>
        <br/>

            <span style={{ fontWeight: '400', color: '#000000', whiteSpace: 'pre-line' }}>Mi aporte incluyó la implementación y evaluación de funcionalidades de la aplicación, así como el procesamiento y análisis estadístico de la información recolectada, con el fin de evaluar su usabilidad, efectividad y desempeño, asegurando la solidez metodológica y la validez de las conclusiones del trabajo de tesis.</span>
     <br/>
     <br/>
     <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        
        <a href='https://hdl.handle.net/1992/76305'>
            <button type="button" className="btn" style={{backgroundColor: '#5386e4', color: '#ffffff', height: '40px', gap: '10px', width: '150px' }}>Ver Publicación</button>
        </a>
        </div>
        </div>
        
        <img 
          className="publication-image" 
          src="img5.jpeg" 
          alt="Artículo Publicado" 
          width="200px" 
        />
        
      </div>
      
    </section>
  )
}