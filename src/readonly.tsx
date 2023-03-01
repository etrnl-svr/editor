import React, { FC, useEffect } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
// import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";

import CustomImage from "./extensions/image";
import CustomVideo from "./extensions/video";
import CustomFile from "./extensions/file";
import CustomGoogleForm from "./extensions/googleform";
import CustomTypeform from "./extensions/typeform";
import ResizableImage from "./extensions/resizable-image";
import ResizableVideo from "./extensions/resizable-video";
import ChapterLink from "./extensions/chapter-link";
import CustomPaperform from "./extensions/paperform";
import { CustomLink } from "./extensions/custom-link";
import ImageGalleryExtension from "./extensions/image-gallery";

interface Props {
  onChange?: (data: any, dataInText: string) => void;
  value?: any;
  deviceType?: any;
  sopIdCallback?: any;
}

const Editor: FC<Props> = ({ value, deviceType, sopIdCallback }) => {
  // const [imageRange, setImageRange] = useState(null);
  // const [videoRange, setVideoRange] = useState(null);
  // const [fileRange, setFileRange] = useState(null);
  // let [editor, setEditor] = useState();
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      Highlight,
      Placeholder.configure({
        placeholder: ({ node }) => {
          return "Type / for options";
        },
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      // Link,
      ResizableImage.configure({
        HTMLAttributes: {
          isReadOnly: true,
        },
      }),
      ResizableVideo.configure({
        HTMLAttributes: {
          isReadOnly: true,
        },
      }),
      CustomImage.configure({
        HTMLAttributes: {
          class: "custom-image",
          loading: "lazy",
          // isReadOnly: true,
        },
      }),
      CustomVideo.configure({
        HTMLAttributes: {
          class: "custom-video",
          loading: "lazy",
          // onLoad: "alert('Loaded!');",
        },
      }),
      CustomFile.configure({
        HTMLAttributes: {
          class: "custom-file",
        },
      }),
      CustomGoogleForm.configure({
        HTMLAttributes: {
          class: "custom-google-form",
        },
      }),
      CustomTypeform.configure({
        HTMLAttributes: {
          class: "custom-type-form",
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      ImageGalleryExtension,
      ChapterLink.configure({
        HTMLAttributes: {
          deviceType: deviceType,
          sopIdCallback: sopIdCallback,
        },
      }),
      CustomLink.configure({
        HTMLAttributes: {
          deviceType: deviceType,
        },
      }),
      CustomPaperform.configure({
        HTMLAttributes: {
          class: "custom-type-form",
          src: "",
          editMode: false,
        },
      }),
    ],
    editable: false,
    // content: value,
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(value);
      //   editor.setOptions({ editable: !readonly });
    }
  }, [editor, value]);

  return (
    <>
      <div>
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default Editor;
