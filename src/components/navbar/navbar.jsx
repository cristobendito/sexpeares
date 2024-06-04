import React from 'react';
import './navbar.css';
import logoGif from '../../assets/sexpeares3D.gif';

const Navbar = () => {
   const handleNavigation = (page) => {
    // logica para navegar pagina correspondiente
    console.log(`Navegando a ${page}`);
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
        <button className="navbar-button" onClick={() => handleNavigation('Discos')}>
          Discos
        </button>
        <button className="navbar-button" onClick={() => handleNavigation('Conciertos')}>
          Conciertos
        </button>
        <button className="navbar-button" onClick={() => handleNavigation('Videos')}>
          Videos
        </button>
        <button className="navbar-button" onClick={() => handleNavigation('Tienda')}>
          Tienda
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
