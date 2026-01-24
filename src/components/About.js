import React from 'react'
import './About.css'
import { Carrousel } from './Carrousel'

export const About = () => {
  return (
    <section id="about" className='size-container'>
      <h3 className='about-title'>Perfil</h3>

      <div className="grid-container">
      
        <div className="grid-item">
          <Carrousel />
        </div>


        <div className="body-text-container">
          <p className='bodyy'>
            <strong>Ingeniero Biomédico</strong> de la Universidad de los Andes, 
            con distinción académica <mark>Cum Laude</mark>, sólida formación 
            en ciencias aplicadas e ingeniería, y marcado interés en la innovación 
            educativa y la transformación de los procesos de enseñanza-aprendizaje 
            mediante la tecnología. 
            <br /><br />
            Me motiva la resolución de problemas y disfruto analizando y solucionando 
            retos técnicos que requieren pensamiento ágil y soluciones efectivas. 
            Valoro la colaboración, tomo iniciativa y busco mejorar procesos mediante 
            un enfoque proactivo y servicial.
          </p>
        </div>
      </div>
    </section>
  )
}