import React from "react";
import Navbar from '../components/navbar/navbar';
import MediaControlCard from '../components/play/player';
import Footer from '../components/footer/footer';


function Videos() {
  return (

    <div className="Videos">
      <Navbar />

      <MediaControlCard />
      <Footer />
    </div>

  );
};

export default Videos;