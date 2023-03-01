import { FC } from "react";
import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";
import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

import SlashCommandListController from "./SlashCommandListController";

export const SlashCommands: any = Extension.create({
  name: "slash-command",

  defaultOptions: {
    commands: [],
    filterCommands: (commands: object[], query: any) => {
      let finalCommandList: any = [];
      commands.forEach((commandItem: any) => {
        if (!commandItem.isBasicVersion) {
          finalCommandList.push(commandItem);
        }
      });
      return finalCommandList.filter((item: any) =>
        item.title.toLowerCase().startsWith(query.toLowerCase())
      );
      // .slice(0, 11);
    },
    component: null,
    suggestion: {
      char: "/",
      startOfLine: false,
    },
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
        items: (query) =>
          this.options.filterCommands(this.options.commands, query),
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        },
        render: () => {
          let component: any;
          let popup: any;

          return {
            onStart: (props) => {
              component = new ReactRenderer(SlashCommandListController, {
                editor: props.editor,
                props: { ...props, component: this.options.component },
              });

              popup = tippy("body", {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                placement: "bottom-start",
              });
            },
            onUpdate: (props) => {
              component.updateProps({
                ...props,
                component: this.options.component,
              });

              popup[0].setProps({
                getReferenceClientRect: props.clientRect,
              });
            },
            onKeyDown(props) {
              return component.ref?.onKeyDown(props);
            },
            onExit() {
              popup[0].destroy();
              component.destroy();
            },
          };
        },
      }),
    ];
  },
});
