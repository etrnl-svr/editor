import React, { useState, useEffect } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import Gallery from "./image-grid-view/Gallery";

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

export default (props) => {
  return (
    <NodeViewWrapper>
      <div>
        <Gallery
          images={props.node.attrs.imageList}
          margin={10}
          enableImageSelection={true}
        />
      </div>
    </NodeViewWrapper>
  );
};
