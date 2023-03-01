import { Editor } from "@tiptap/react";

// import checkIcon from "./icons/checklist.png";
// import menuIcon from "./icons/menu.png";
// import notificationIcon from "./icons/notification.png";
// import settingsIcon from "./icons/settings.png";
// import sliderIcon from "./icons/slider.png";
// import stepsIcon from "./icons/steps.png";

function setLink(editor: Editor) {
  const previousUrl = editor.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);

  // cancelled
  if (url === null) {
    return;
  }

  // empty
  if (url === "") {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();

    return;
  }
  if (
    url.includes("https://staging-app.delightree.com/sop/") ||
    url.includes("https://beta.delightree.com/sop/")
  ) {
    // update link
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({
        sopUrl: url,
        href: "javascript:void(0)",
        target: "_self",
        class: "custom-chapter-link",
      })
      .run();
  } else {
    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }
}

const iconObj: any = {
  checklist: "",
  menu: "",
  notification: "",
  settings: "",
  slider: "",
  steps: "",
};

export { setLink, iconObj };
