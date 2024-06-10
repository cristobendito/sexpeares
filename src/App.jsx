import React from "react";
import Navbar from './components/navbar/navbar';
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import sexpeares1 from './assets/fotos/sexpeares1.jpg';
/* import './components/home.css'; */
import './App.css';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="home-container">
        <img src={sexpeares1} alt="Sexpeares" className="home-image" />
      </div>

      <MediaControlCard />
      <Footer />
    </div>
  );
};

export default Home;




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

export default App; */