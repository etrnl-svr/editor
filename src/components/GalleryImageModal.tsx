import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
  SortableHandle,
} from "react-sortable-hoc";
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

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    // thumbnailWidth: 320,
    // thumbnailHeight: 174,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    // thumbnailWidth: 320,
    // thumbnailHeight: 212,
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    // thumbnailWidth: 320,
    // thumbnailHeight: 212,
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    // thumbnailWidth: 320,
    // thumbnailHeight: 212,
  },
];

const DragHandle = SortableHandle(() => (
  <span style={{ cursor: "pointer" }}>::</span>
));

const SortableItem = SortableElement(({ value, onDelete, indexValue }) => {
  return (
    <div
      style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
    >
      <DragHandle />
      <div style={{ flex: "1 1 auto", marginLeft: "20px" }}>
        <img src={value.thumbnail} style={{ width: "100px", margin: "0px" }} />
      </div>

      <div
        onClick={() => {
          console.log("On click delete");
          onDelete(indexValue);
        }}
        style={{ cursor: "pointer" }}
      >
        Delete
      </div>
    </div>
  );
});

const SortableList = SortableContainer(({ items, onDelete }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
          indexValue={index}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
});

const GalleryImageModal = ({
  modalIsOpen,
  closeModal,
  editor,
  range,
  imageCallback,
}) => {
  let imageInputRef: any = null;

  const [galleryImageList, setGalleryList] = useState(
    editor.getAttributes("image-gallery").imageList || []
  );

  const [isLoading, setIsLoading] = useState(false);

  const fileChange = (e: any) => {
    setIsLoading(true);
    if (imageCallback) {
      imageCallback(imageInputRef.files, setBulkImages);
    }
  };

  const setBulkImages = (urlList) => {
    let gridViewList: any = galleryImageList;
    if (urlList?.length) {
      urlList.forEach((value) => {
        gridViewList.push({
          src: value,
          thumbnail: value,
        });
      });
    }
    console.log("Grid View List", gridViewList);
    setIsLoading(false);
    setGalleryList([...gridViewList]);
  };

  const setGalleryImages = () => {
    console.log("Gallery Image List", galleryImageList);
    if (range) {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setGalleryImages({ imageList: galleryImageList })
        .run();
    } else {
      console.log("On add more image", galleryImageList);
      editor
        .chain()
        .focus()
        .setGalleryImages({
          imageList: [...galleryImageList],
        })
        .run();
    }

    closeModal();
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const updatedGalleryList: any = arrayMove(
        galleryImageList,
        oldIndex,
        newIndex
      );
      setGalleryList(updatedGalleryList);
    }
  };

  const onDelete = (index) => {
    galleryImageList.splice(index, 1);
    setGalleryList([...galleryImageList]);
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
          <div style={{ marginBottom: "10px" }}>Upload Images</div>
          <input
            type="file"
            onChange={fileChange}
            id="up"
            multiple
            ref={(input) => (imageInputRef = input)}
          />
          {galleryImageList && !!galleryImageList?.length && (
            <div style={{ height: "300px", overflow: "auto" }}>
              <SortableList
                items={galleryImageList}
                onSortEnd={onSortEnd}
                onDelete={onDelete}
                useDragHandle
              />
            </div>
          )}

          <div style={{ marginTop: "20px" }}>
            {isLoading && <div>Uploading...</div>}
            {!isLoading && <button onClick={setGalleryImages}>Save</button>}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryImageModal;
