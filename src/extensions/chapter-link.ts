import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "../components/ChapterLink";

export default Node.create({
  name: "chapter-link",

  defaultOptions: {
    inline: false,
    HTMLAttributes: {
      deviceType: "",
      sopIdCallback: null,
    },
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
      sopId: {
        default: null,
      },
      deviceType: {
        default: this.options?.HTMLAttributes?.deviceType || "",
      },
      sopIdCallback: {
        default: this.options?.HTMLAttributes?.sopIdCallback,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "chapter-link-component",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    console.log("HtmlAttributes", HTMLAttributes);
    console.log("Options Attributes", this.options.HTMLAttributes);
    return [
      "chapter-link-component",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
  addCommands(): any {
    return {
      setChapter:
        (options) =>
        ({ tr, commands }) => {
          if (tr.selection?.node?.type?.name == "chapter-link") {
            return commands.updateAttributes("chapter-link", options);
          } else {
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
