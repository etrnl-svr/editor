import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "200px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const PaperformModal = ({ modalIsOpen, closeModal, editor, range }) => {
  const [paperformValue, setPaperformValue] = useState("");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <div style={{ textAlign: "right" }}>
          <button onClick={closeModal}>close</button>
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <div style={{ marginBottom: "10px" }}>Paperform Value:</div>
          <textarea
            id="url"
            style={{ width: "100%", height: "50px" }}
            onChange={(e) => {
              setPaperformValue(e.target.value);
              console.log("Value", e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                if (paperformValue) {
                  editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setPaperform({
                      "data-paperform-id": paperformValue,
                    })
                    .run();
                  closeModal();
                }
              }
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default PaperformModal;
