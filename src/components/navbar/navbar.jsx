import React from 'react';
import './navbar.css';
import logoGif from '../../assets/sexpeares3D.gif';

const Navbar = () => {
  const handleNavigation = (page) => {
    console.log(`Navegando a ${page}`);
  };

  const handleExternalNavigation = (url) => {
    window.open(url, '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoGif} alt="Logo" className="logo-img" />
      </div>
      <div className="navbar-links">
        <button className="navbar-button" onClick={() => handleNavigation('Home')}>
          Home
        </button>
        <button className="navbar-button" onClick={() => handleNavigation('Discografía')}>
          Discografía
        </button>
        <button className="navbar-button" onClick={() => handleNavigation('Conciertos')}>
          Conciertos
        </button>
        <button className="navbar-button" onClick={() => handleNavigation('Videos')}>
          Videos
        </button>
        <button className="navbar-button" onClick={() => handleNavigation('Presskit')}>
          Press Kit
        </button>
        <button className="navbar-button" onClick={() => handleExternalNavigation('https://tienda.eldromedariorecords.com/collections/las-sexpeares-1')}>
          Tienda
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
