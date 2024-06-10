import { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import "./App.css";

function Conciertos() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/bandsintown-events/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    
    script.onload = () => {
      // forzar la reaplicación de estilos 
  
      document.body.classList.add('reapply-styles');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (

      <div className="Conciertos">
        <Navbar />
        <div className='sk-bandsintown-event' data-embed-id='25423773'></div>
        <MediaControlCard />
        <Footer />
      </div>

  );
}

export default Conciertos;