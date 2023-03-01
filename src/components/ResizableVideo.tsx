import React, { useState, useEffect } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import { Rnd } from "react-rnd";
import "react-medium-image-zoom/dist/styles.css";
export default (props) => {
  const isReadOnly = props.node.type.attrs.isReadOnly.default;
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

  return (
    <NodeViewWrapper
      className={`${"video-wrapper"} resizable-video-float-${
        props.node.attrs.float
      }`}
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
        {/* <div
          className={`${"video-wrapper"} ${
            "resizable-video-float-" + props.node.attrs.float
          }`}
        > */}
        <iframe
          src={props.node.attrs.src}
          style={{
            borderRadius: "8px",
            width: props.node.attrs.width,
            height: props.node.attrs.height,
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          // allowfullscreen="allowfullscreen"
          loading="lazy"
          className="resizable-video-class"
          scrolling="yes"
        />
        {/* </div> */}
      </Rnd>
    </NodeViewWrapper>
  );
};
