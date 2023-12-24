import React, { useState } from 'react';
import Modal from 'react-modal';
import './CropCard.css'; 

const CropCard = ({ imageUrl, name, detail }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="crop-card" onClick={openModal}>
      <img src={imageUrl} alt={name} className="crop-image" />
      <p className="crop-name">{name}</p>
     <p className="crop-name">{detail}</p>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img src={imageUrl} alt={name} className="modal-image" />
      </Modal>
    </div>
  );
};

export default CropCard;
