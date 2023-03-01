import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "../components/PaperformElement";

export default Node.create({
  name: "custom-paper-form",

  defaultOptions: {
    inline: false,
    HTMLAttributes: {
      editMode: false,
      src: "",
      class: "custom-type-form",
    },
  },

  // addOptions: {
  //   inline: false,
  //   HTMLAttributes: {
  //     editMode: false,
  //     src: null,
  //   },
  // },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? "inline" : "block";
  },

  draggable: true,

  addAttributes() {
    return {
      float: {
        default: "none",
        rendered: false,
      },
      //   style: {
      //     default: "height:100%;",
      //   },
      "data-paperform-id": {
        default: null,
      },
      editMode: {
        default: false,
      },

      loading: {
        default: "lazy",
      },
    };
  },

  // parseHTML() {
  //   return [
  //     {
  //       tag: "div[data-paperform-id]",
  //     },
  //   ];
  // },

  parseHTML() {
    return [
      {
        tag: "paperform-element",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    console.log("HtmlAttributes", HTMLAttributes);
    console.log("Options Attributes", this.options.HTMLAttributes);
    return [
      "paperform-element",
      mergeAttributes(this.options?.HTMLAttributes, HTMLAttributes),
    ];
    // if (this.options.HTMLAttributes?.editMode) {
    //   const src = `https://${HTMLAttributes["data-paperform-id"]}.paperform.co`;
    //   this.options.HTMLAttributes.src = src;
    //   return [
    //     "div",
    //     {
    //       class: `${"video-wrapper"} ${
    //         "custom-type-form-float-" + node.attrs.float
    //       }`,
    //       style: "height:100vh",
    //     },
    //     [
    //       "iframe",
    //       mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    //       0,
    //     ],
    //   ];
    // }
    // return [
    //   "div",
    //   {
    //     class: `${"video-wrapper"} ${
    //       "custom-type-form-float-" + node.attrs.float
    //     }`,
    //   },
    //   [
    //     "div",
    //     mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    //     ["iframe", {}, 0],
    //   ],
    // ];
  },
  addCommands(): any {
    return {
      setPaperform:
        (options) =>
        ({ tr, commands }) => {
          if (tr.selection?.node?.type?.name == "custom-paper-form") {
            return commands.updateAttributes("custom-paper-form", options);
          } else {
            console.log("Options", options);
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
