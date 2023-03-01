import Image from "@tiptap/extension-image";
import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "../components/ResizableImage";

export default Image.extend({
  name: "custom-image",

  addAttributes() {
    if (Image.config) {
      const imageConfig: any = Image.config;
      const addParentAttributes = imageConfig.addAttributes();
      return {
        ...addParentAttributes,
        size: {
          default: "medium",
          rendered: false,
        },
        float: {
          default: "none",
          rendered: false,
        },
        width: {
          default: 300,
        },
        height: {
          default: "auto",
        },
        isReadOnly: {
          default: true,
        },
      };
    }
  },

  addCommands() {
    return {
      setImage:
        (options: any) =>
        ({ tr, commands }: any) => {
          if (tr.selection?.node?.type?.name == "custom-image") {
            return commands.updateAttributes("custom-image", options);
          } else {
            return commands.insertContent({
              type: this.name,
              attrs: options,
            });
          }
        },
      setExternalImage:
        (options: any) =>
        ({ tr, commands }: any) => {
          if (tr.selection?.node?.type?.name == "custom-image") {
            return commands.updateAttributes("custom-image", options);
          } else {
            return commands.insertContent({
              type: this.name,
              attrs: options,
            });
          }
        },
    };
  },

  // renderHTML({ node, HTMLAttributes }) {
  //   HTMLAttributes.class = " custom-image-" + node.attrs.size;
  //   HTMLAttributes.class += " custom-image-float-" + node.attrs.float;

  //   return [
  //     "img",
  //     mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
  //   ];
  // },

  renderHTML({ HTMLAttributes }) {
    console.log("This options", this.options);
    return [
      "image-component",
      mergeAttributes(this.options?.HTMLAttributes, HTMLAttributes),
    ];
  },

  parseHTML() {
    return [
      {
        tag: "image-component",
      },
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
