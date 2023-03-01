import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "../components/ResizableVideo";

export default Node.create({
  name: "resizable-video",

  defaultOptions: {
    inline: false,
    HTMLAttributes: {
      isReadOnly: false,
    },
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options?.inline ? "inline" : "block";
  },

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      title: {
        default: null,
      },
      frameborder: {
        default: "0",
      },
      allow: {
        default:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      },
      allowfullscreen: {
        default: "allowfullscreen",
      },
      float: {
        default: "none",
        rendered: false,
      },
      loading: "lazy",
      class: {
        default: "resizable-video-class",
      },
      scrolling: {
        default: "yes",
      },
      width: {
        default: 500,
      },
      height: {
        default: 300,
      },
      isReadOnly: {
        default: this.options.HTMLAttributes?.isReadOnly,
      },
    };
  },

  addCommands(): any {
    return {
      setResizableVideo:
        (options) =>
        ({ tr, commands }) => {
          if (tr.selection?.node?.type?.name == "resizable-video") {
            return commands.updateAttributes("resizable-video", options);
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
    return [
      "resize-video-component",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  parseHTML() {
    return [
      {
        tag: "resize-video-component",
      },
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
