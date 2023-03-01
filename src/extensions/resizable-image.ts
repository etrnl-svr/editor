import Image from "@tiptap/extension-image";
import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "../components/ResizableImage";

export default Node.create({
  name: "resizable-image",

  defaultOptions: {
    inline: false,
    HTMLAttributes: {
      isReadOnly: false,
    },
  },

  inline() {
    return this.options?.inline;
  },

  group() {
    return this.options?.inline ? "inline" : "block";
  },

  addAttributes() {
    // console.log("Resizable Config", this.options, Image.config);
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
          default: this.options.HTMLAttributes?.isReadOnly,
        },
      };
    }
  },

  addCommands() {
    return {
      setImage:
        (options: any) =>
        ({ tr, commands }: any) => {
          if (tr.selection?.node?.type?.name == "resizable-image") {
            return commands.updateAttributes("resizable-image", options);
          } else {
            return commands.insertContent({
              type: this.name,
              attrs: options,
            });
          }
        },
      setResizableImage:
        (options: any) =>
        ({ tr, commands }: any) => {
          if (tr.selection?.node?.type?.name == "resizable-image") {
            return commands.updateAttributes("resizable-image", options);
          } else {
            return commands.insertContent({
              type: this.name,
              attrs: options,
            });
          }
        },
    };
  },

  renderHTML({ HTMLAttributes }) {
    console.log("This options", this.options);
    return [
      "resize-image-component",
      mergeAttributes(this.options?.HTMLAttributes, HTMLAttributes),
    ];
  },

  parseHTML() {
    return [
      {
        tag: "resize-image-component",
      },
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
