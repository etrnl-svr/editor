import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "../components/ImageGallery";

export default Node.create({
  name: "image-gallery",

  defaultOptions: {
    inline: false,
    HTMLAttributes: {},
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? "inline" : "block";
  },

  draggable: true,

  addAttributes() {
    return {
      imageList: {
        default: [],
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "image-gallery-component",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    console.log("HtmlAttributes", HTMLAttributes);
    console.log("Options Attributes", this.options.HTMLAttributes);
    return [
      "image-gallery-component",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
  addCommands(): any {
    return {
      setGalleryImages:
        (options) =>
        ({ tr, commands }) => {
          if (tr.selection?.node?.type?.name == "image-gallery") {
            console.log("I am getting called 1", options);
            return commands.updateAttributes("image-gallery", options);
          } else {
            console.log("I am getting called 2");
            return commands.insertContent({
              type: this.name,
              attrs: options,
            });
          }
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
