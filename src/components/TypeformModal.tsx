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

const TypeformModal = ({ modalIsOpen, closeModal, editor, range }) => {
  const [typeformUrl, setTypeformUrl] = useState("");

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
          <div style={{ marginBottom: "10px" }}>Typeform Embed URL:</div>
          <textarea
            id="url"
            style={{ width: "100%", height: "50px" }}
            onChange={(e) => {
              setTypeformUrl(e.target.value);
              console.log("Value", e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                if (typeformUrl) {
                  const splittedUrl = typeformUrl.split("/");

                  const id = splittedUrl[splittedUrl.length - 1];
                  console.log("Splitted Url", splittedUrl, id);
                  editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setTypeform({
                      "data-tf-widget": splittedUrl[splittedUrl.length - 1],
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

export default TypeformModal;
