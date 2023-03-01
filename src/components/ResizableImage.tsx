import React, { useState, useEffect } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import { Rnd } from "react-rnd";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// import ViewImageModal from "./ViewImageModal";
export default (props) => {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const isReadOnly = props.node.type.attrs.isReadOnly.default;
  console.log("Is Read Only IMage", props.node);
  const increase = (width, height) => {
    props.updateAttributes({
      width: width,
      height: height,
    });
  };
  let enableResizingObj = {
    top: false,
    right: true,
    bottom: true,
    left: true,
    topRight: false,
    bottomRight: true,
    bottomLeft: true,
    topLeft: false,
  };
  if (isReadOnly) {
    enableResizingObj = {
      ...enableResizingObj,
      right: false,
      bottom: false,
      left: false,
      bottomRight: false,
      bottomLeft: false,
    };
  }

  let imageStyle = {};
  if (isZoomed) {
    imageStyle = {
      width: "85%",
      marginTop: "20px",
      marginBottom: "20px",
    };
  }
  return (
    <NodeViewWrapper
      className={`resizable-image-float-${props.node.attrs.float}`}
    >
      <Rnd
        sttl
        size={{
          width: props.node.attrs.width,
          height: props.node.attrs.height,
        }}
        disableDragging
        enableResizing={enableResizingObj}
        style={{ position: "relative", transform: "none" }}
        onResizeStop={(e, direction, ref, delta, position) => {
          increase(ref.style.width, ref.style.height);
        }}
        // lockAspectRatio
      >
        {isReadOnly && (
          <ControlledZoom
            overlayBgColorEnd="rgba(0,0,0,.8)"
            isZoomed={isZoomed}
            onZoomChange={(value) => {
              setIsZoomed(value);
            }}
            // closeText="Close"
          >
            <img
              src={props.node.attrs.src}
              style={{
                borderRadius: "8px",
                ...imageStyle,
                width: props.node.attrs.width,
                height: props.node.attrs.height,
              }}
            />
          </ControlledZoom>
        )}
        {!isReadOnly && (
          <img
            src={props.node.attrs.src}
            style={{
              borderRadius: "8px",
              width: props.node.attrs.width,
              height: props.node.attrs.height,
            }}
          />
        )}
      </Rnd>
    </NodeViewWrapper>
  );
};
