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