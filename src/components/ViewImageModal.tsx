import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    boxShadow: "0 0 0 50vmax rgba(0,0,0,.5)",
    transform: "translate(-50%, -50%)",
    // width: "400px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const ViewImageModal = ({ modalIsOpen, closeModal, url }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div>
        <img src={url} style={{ borderRadius: "8px" }} />
      </div>
    </Modal>
  );
};

export default ViewImageModal;
