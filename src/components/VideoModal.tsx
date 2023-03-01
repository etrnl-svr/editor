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

const VideoModal = ({
  modalIsOpen,
  closeModal,
  editor,
  range,
  isResizable,
}) => {
  const [videoValue, setVideoValue] = useState("");

  const getYoutubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
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
          <div style={{ marginBottom: "10px" }}>Video Embed URL:</div>
          <input
            id="url"
            onChange={(e) => {
              setVideoValue(e.target.value);
              console.log("Value", e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                let url = videoValue;
                const youtubeId = getYoutubeId(videoValue);
                if (youtubeId) {
                  url = `https://www.youtube.com/embed/${youtubeId}`;
                }
                console.log("Youtube Url", url);

                if (url) {
                  let className = "custom-video";
                  if (!youtubeId) {
                    className = "custom-google-form";
                  }
                  if (isResizable) {
                    console.log("Resizable Video", isResizable);
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setResizableVideo({ src: url, class: className })
                      .run();
                  } else {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setExternalVideo({ src: url, class: className })
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

export default VideoModal;
