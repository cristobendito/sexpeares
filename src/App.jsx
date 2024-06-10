import React from 'react';
import Navbar from './components/navbar/navbar';
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import YouTubeChannel from './components/youtube';
import './App.css';

function Videos() {
  return (

      <div className="Videos">
        <Navbar />
        <YouTubeChannel />
        <MediaControlCard />
        <Footer />
      </div>

  );
}

export default Videos;


/* import { useEffect } from 'react';
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

        // Reaplicar estilos después de cargar el script
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

export default Conciertos; */


/* import Navbar from './components/navbar/navbar';
import './App.css'
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import ModalCard from './components/main/modalCard';
import somoslopeor from "./assets/somoslopeor.jpg";
import qadg from './assets/qadg.jpg';
import revz from './assets/revz.jpg';
import mefui from './assets/mefui.jpg';
import sexpearesep from './assets/sexpearesep.jpg';


function App() {
  const spotifyLink1 = 'https://open.spotify.com/intl-es/album/11Gz3ysUE4fqJg3KN51n7N?si=7B8WGtNFSne6FG6qr-OnOA';
  const spotifyLink2 = 'https://open.spotify.com/intl-es/album/4hb0pZ1Bdm19TGHF8Q88vw?si=E5ImClFLRQG5RyXKmOBjtg';
  const spotifyLink3 = 'https://open.spotify.com/intl-es/album/67LI43N7nwGWoq8ZY4eASL?si=jwnusnCUTA-brYxpP-ZMQQ';
  const spotifyLink4 = 'https://open.spotify.com/album/4bKYZ40qo1j0278K5GZ3io?si=gCQZZMWNR82WRzGTttUzpg';
  const spotifyLink5 = 'https://open.spotify.com/album/77KcXNaA7zPxpcNBPh8Ecf?si=PvIJXL2zR4ajCcmnBp5qKg';


  return (
    <div className="App">
      <Navbar />
      <div className="modal-cards-container" title="Discografía">
      <ModalCard imageUrl={sexpearesep} spotifyLink={spotifyLink5} />
      <ModalCard imageUrl={somoslopeor} spotifyLink={spotifyLink2} />
      <ModalCard imageUrl={mefui} spotifyLink={spotifyLink3} />
      <ModalCard imageUrl={revz} spotifyLink={spotifyLink4} />
      <ModalCard imageUrl={qadg} spotifyLink={spotifyLink1} />

      </div>
      <MediaControlCard />
      <Footer />
    </div>
  );
}

export default App; */

/* import React from "react";
import Navbar from './components/navbar/navbar';
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import sexpeares1 from './assets/fotos/sexpeares1.jpg';
import './components/home.css';
import './App.css';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="page-container">
        <div className="home-container">
          <img src={sexpeares1} alt="Sexpeares" className="home-image" />
          <div className="overlay-text">"A veces indie, a veces punk"</div>
        </div>
      </div>

      <MediaControlCard />
      <Footer />
    </div>
  );
};

export default Home; */




/* import React from 'react';
import Navbar from './components/navbar/navbar';
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import Presskit from './components/presskit/Presskit';
import './App.css';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Presskit />
      <MediaControlCard />
      <Footer />
    </div>
  );
}

export default App; */




/* import React from "react";
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import './App.css'
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import sexpeares1 from './assets/fotos/sexpeares1.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={sexpeares1} />

      <MediaControlCard />
      <Footer />
    </div>
  );
};

export default App;  */