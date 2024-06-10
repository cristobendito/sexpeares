import React from "react";
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
        </div>
      </div>

      <MediaControlCard />
      <Footer />
    </div>
  );
};

export default Home;