import React from 'react';
import Navbar from '../components/navbar/navbar';
import MediaControlCard from '../components/play/player';
import Footer from '../components/footer/footer';
import Presskit from '../components/presskit/Presskit';
import './App.css';


function Press() {

  return (
    <div className="Press">
      <Navbar />
      <Presskit />
      <MediaControlCard />
      <Footer />
    </div>
  );
}

export default Press;