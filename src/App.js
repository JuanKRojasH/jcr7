import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';

import { Inicio } from './components/Inicio';
import { Habilidades } from './components/Habilidades';
import { Certificado } from './components/Certificado';
import { Publicacion } from './components/Publicacion';


function App() {
  return (
    <div className="app-container">
     
      <Header />
    
      <main className="content">
        <Inicio/>
        <About />
        <Habilidades />
        <Certificado />
        <Publicacion />
       
        
      <Footer />
      </main>

     
    </div>
  );
}

export default App;
