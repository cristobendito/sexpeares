import React from 'react';
import './Presskit.css';
import presskit from '../../assets/PressKit.zip';

const Presskit = () => {
  return (
    <div className="presskit-container">
      <div className="presskit-section">
        <h2 className="presskit-title">Kit de Prensa</h2>
        <p className="presskit-text">Descárgalo para más info.</p>
        <a href={presskit} download="PressKit.zip" className="download-button">
          V V V
        </a>
      </div>
    </div>
  );
};

export default Presskit;
