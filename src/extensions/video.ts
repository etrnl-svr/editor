import { Node, mergeAttributes } from "@tiptap/core";

export default Node.create({
  name: "custom-video",

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
        default: "custom-video",
      },
      scrolling: {
        default: "yes",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "iframe[src]",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    console.log("HtmlAttributes", HTMLAttributes);
    console.log("Options Attributes", this.options.HTMLAttributes);
    return [
      "div",
      {
        class: `${"video-wrapper"} ${"custom-video-float-" + node.attrs.float}`,
      },
      [
        "iframe",
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
        0,
      ],
    ];
  },
  addCommands(): any {
    return {
      setExternalVideo:
        (options) =>
        ({ tr, commands }) => {
          if (tr.selection?.node?.type?.name == "custom-video") {
            return commands.updateAttributes("custom-video", options);
          } else {
            return commands.insertContent({
              type: this.name,
              attrs: options,
            });
          }
        },
    };
  },
});
