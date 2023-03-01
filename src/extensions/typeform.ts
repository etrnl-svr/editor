import { Node, mergeAttributes } from "@tiptap/core";

export default Node.create({
  name: "custom-type-form",

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
      // src: {
      //   default: null,
      // },
      // title: {
      //   default: null,
      // },
      // frameborder: {
      //   default: "0",
      // },
      // allow: {
      //   default:
      //     "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      // },
      // allowfullscreen: {
      //   default: "allowfullscreen",
      // },
      float: {
        default: "none",
        rendered: false,
      },
      // loading: "lazy",
      // //   width: "500",
      // height: "600",
      style: {
        default: "height:500px;",
      },
      "data-tf-widget": {
        default: null,
      },
      "data-tf-hide-footer": {
        default: true,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-tf-widget]",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    console.log("HtmlAttributes", HTMLAttributes);
    console.log("Options Attributes", this.options, this.options);
    return [
      "div",
      {
        class: `${"video-wrapper"} ${
          "custom-type-form-float-" + node.attrs.float
        }`,
      },
      ["div", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0],
    ];
  },
  addCommands(): any {
    return {
      setTypeform:
        (options) =>
        ({ tr, commands }) => {
          if (tr.selection?.node?.type?.name == "custom-type-form") {
            return commands.updateAttributes("custom-type-form", options);
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
});
