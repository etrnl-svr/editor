import { Node, mergeAttributes } from "@tiptap/core";

export default Node.create({
  name: "custom-file",

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
      href: {
        default: null,
      },
      title: {
        default: null,
      },
      float: {
        default: "none",
        rendered: false,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[class=file]",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      "div",
      {
        class: "file",
      },
      [
        "a",
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
        0,
        // [
        //   "div",
        //   {
        //     style: "width: 200px; height: 200px;background:#999",
        //   },
        //   0,
        // ],
      ],
    ];
  },
  addCommands(): any {
    return {
      setFile:
        (options) =>
        ({ tr, commands }) => {
          if (tr.selection?.node?.type?.name == "custom-file") {
            return commands.updateAttributes("custom-file", options);
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
