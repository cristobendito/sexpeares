import React, { useState } from 'react';
import './modalCard.css';

const ModalCard = ({ imageUrl, spotifyLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modal-card-container">
      <img src={imageUrl} alt="Imagen" onClick={toggleModal} />
      {isOpen && (
        <div className="modal-background" onClick={toggleModal}>
          <div className="modal-content">
            <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} alt="Imagen" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCard;
