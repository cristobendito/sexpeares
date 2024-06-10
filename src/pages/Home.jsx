import React from "react";
import Navbar from './components/navbar/navbar';
import '../App.css'
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import sexpeares1 from './assets/fotos/sexpeares1.jpg';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <img src={sexpeares1} />

      <MediaControlCard />
      <Footer />
    </div>
  );
};

export default Home;