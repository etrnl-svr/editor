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

const extractIframeAttributes = (value) => {
  console.log("Value of iframe", value);
  var regexFound = value.match(/width="(\d*?)" height="(\d*?)" /);

  const urlRegex = /(https?:\/\/[^ ]*)/;
  var url = value.match(urlRegex)[1].split('"')[0];

  return {
    url: url,
    width: regexFound[1],
    height: regexFound[2],
  };
};

const GoogleFormModal = ({ modalIsOpen, closeModal, editor, range }) => {
  const [iframeValue, setIframeValue] = useState("");

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
          <div style={{ marginBottom: "10px" }}>Google Form embed Code:</div>
          <input
            id="url"
            style={{ width: "100%", height: "50px" }}
            onChange={(e) => {
              setIframeValue(e.target.value);
              console.log("Value", e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                const iframeObj = extractIframeAttributes(iframeValue);
                console.log("Iframe obj", iframeObj);
                if (iframeObj.url) {
                  console.log("Iframe Url", iframeObj.url);
                  editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setGoogleForm({
                      src: iframeObj.url,
                      id: "test",
                      height: `${iframeObj.height}`,
                      // class: "custom-google-form",
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

export default GoogleFormModal;
