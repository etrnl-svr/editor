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
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const ImageModal = ({
  modalIsOpen,
  closeModal,
  editor,
  range,
  imageCallback,
  isResizable,
}) => {
  let imageInputRef: any = null;

  const [imageValue, setImageValue] = useState("");

  const fileChange = (e: any) => {
    imageCallback(imageInputRef.files, setImage);
  };

  const setImage = (url) => {
    console.log("Set Image", url);
    if (url) {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setResizableImage({ src: url })
        .run();
      closeModal();
    }
  };

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
          <div style={{ marginBottom: "10px" }}>Upload a file</div>
          <input
            type="file"
            onChange={fileChange}
            id="up"
            ref={(input) => (imageInputRef = input)}
          />
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>or</div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <div style={{ marginBottom: "10px" }}>Image URL:</div>
          <input
            id="url"
            onChange={(e) => {
              setImageValue(e.target.value);
              console.log("Value", e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                // const url = "https://source.unsplash.com/random/400x400";
                const url = imageValue;
                if (url) {
                  if (isResizable) {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setResizableImage({ src: url })
                      .run();
                  } else {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setExternalImage({ src: url })
                      .run();
                  }

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

export default ImageModal;
