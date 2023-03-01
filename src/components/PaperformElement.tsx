import React, { useState, useEffect } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import { Rnd } from "react-rnd";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// import ViewImageModal from "./ViewImageModal";
export default (props) => {
  console.log("Paperorm com", props);
  return (
    <div
      className={`video-wrapper ${
        "custom-type-form-float-" + props.node.attrs.float
      }`}
    >
      <div
        data-paperform-id={props.node.attrs["data-paperform-id"]}
        className="custom-type-form"
      ></div>
    </div>
  );
};
