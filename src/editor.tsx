/* eslint-disable no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Helmet } from "react-helmet";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
// import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";

import { SlashCommands } from "./extensions/slash-commands";
import CustomImage from "./extensions/image";
import ResizableImage from "./extensions/resizable-image";
import ResizableVideo from "./extensions/resizable-video";
import CustomVideo from "./extensions/video";
import CustomFile from "./extensions/file";
import CustomGoogleForm from "./extensions/googleform";
import CustomTypeform from "./extensions/typeform";
import ChapterLink from "./extensions/chapter-link";
import CustomPaperform from "./extensions/paperform";
import { TaskItem } from "./extensions/task-item";
import { CustomLink } from "./extensions/custom-link";
import ImageGalleryExtension from "./extensions/image-gallery";

// import components
import Floatingbar from "./components/Floatingbar";
import CommandList from "./components/CommandList";
import ImageModal from "./components/ImageModal";
import VideoModal from "./components/VideoModal";
import GoogleFormModal from "./components/GoogleFormModal";
import FileUploadModal from "./components/FileUploadModal";
import TypeformModal from "./components/TypeformModal";
import ChaptersModal from "./components/ChaptersModal";
import PaperformModal from "./components/PaperformModal";
import GalleryImageModal from "./components/GalleryImageModal";

interface Props {
  onChange?: (data: any, dataInText: string) => void;
  value?: any;
  imageCallback?: any;
  businessId?: any;
  bulkImageCallback?: any;
  isBasicVersion?: boolean;
}

const Editor: FC<Props> = ({
  onChange,
  value,
  imageCallback,
  businessId,
  bulkImageCallback,
  isBasicVersion,
}) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://paperform.co/__embed.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [imageRange, setImageRange] = useState(null);
  const [videoRange, setVideoRange] = useState(null);
  const [fileRange, setFileRange] = useState(null);

  // let commandList = [
  //   {
  //     title: "Paragraph",
  //     command: ({ editor, range }: any) => {
  //       editor.chain().focus().deleteRange(range).setParagraph().run();
  //     },
  //   },
  //   {
  //     title: "Heading 1",
  //     command: ({ editor, range }: any) => {
  //       editor
  //         .chain()
  //         .focus()
  //         .deleteRange(range)
  //         .setNode("heading", { level: 1 })
  //         .run();
  //     },
  //   },
  //   {
  //     title: "Heading 2",
  //     command: ({ editor, range }: any) => {
  //       editor
  //         .chain()
  //         .focus()
  //         .deleteRange(range)
  //         .setNode("heading", { level: 2 })
  //         .run();
  //     },
  //   },
  //   {
  //     title: "Heading 3",
  //     command: ({ editor, range }: any) => {
  //       editor
  //         .chain()
  //         .focus()
  //         .deleteRange(range)
  //         .setNode("heading", { level: 3 })
  //         .run();
  //     },
  //   },
  //   {
  //     title: "Bulleted List",
  //     command: ({ editor, range }: any) => {
  //       editor.chain().focus().deleteRange(range).toggleBulletList().run();
  //     },
  //   },
  //   {
  //     title: "Numbered List",
  //     command: ({ editor, range }: any) => {
  //       editor.chain().focus().deleteRange(range).toggleOrderedList().run();
  //     },
  //   },
  //   {
  //     title: "To-do List",
  //     command: ({ editor, range }: any) => {
  //       editor.chain().focus().deleteRange(range).toggleTaskList().run();
  //     },
  //   },
  //   {
  //     title: "Quote",
  //     command: ({ editor, range }: any) => {
  //       editor.chain().focus().deleteRange(range).toggleBlockquote().run();
  //     },
  //   },
  //   {
  //     title: "Divider",
  //     command: ({ editor, range }: any) => {
  //       editor.chain().focus().deleteRange(range).setHorizontalRule().run();
  //     },
  //   },
  //   {
  //     title: "Table",
  //     isBasicVersion: isBasicVersion,
  //     command: ({ editor, range }: any) => {
  //       editor.chain().focus().deleteRange(range).insertTable().run();
  //     },
  //   },
  //   {
  //     title: "Image",
  //     isBasicVersion: isBasicVersion,
  //     command: ({ editor, range }: any) => {
  //       openImageResizableModal(range);
  //     },
  //   },
  //   {
  //     title: "Video",
  //     isBasicVersion: isBasicVersion,
  //     command: ({ editor, range }: any) => {
  //       openVideoResizableModal(range);
  //     },
  //   },
  //   {
  //     title: "Google Form",
  //     isBasicVersion: isBasicVersion,
  //     command: ({ editor, range }: any) => {
  //       openGoogleFormModal(range);
  //     },
  //   },

  //   {
  //     title: "Chapter Link",
  //     isBasicVersion: isBasicVersion,
  //     command: ({ editor, range }: any) => {
  //       openChaptersModal(range);
  //     },
  //   },
  //   {
  //     title: "Paper form",
  //     isBasicVersion: isBasicVersion,
  //     command: ({ editor, range }: any) => {
  //       openPaperformModal(range);
  //     },
  //   },
  //   {
  //     title: "Gallery",
  //     isBasicVersion: isBasicVersion,
  //     command: ({ editor, range }: any) => {
  //       openGalleryImageModal(range);
  //     },
  //   },
  // ];
  // if (!isBasicVersion) {
  //   let commandList = [
  //     {
  //       title: "Paragraph",
  //       command: ({ editor, range }: any) => {
  //         editor.chain().focus().deleteRange(range).setParagraph().run();
  //       },
  //     },
  //     {
  //       title: "Heading 1",
  //       command: ({ editor, range }: any) => {
  //         editor
  //           .chain()
  //           .focus()
  //           .deleteRange(range)
  //           .setNode("heading", { level: 1 })
  //           .run();
  //       },
  //     },
  //     {
  //       title: "Heading 2",
  //       command: ({ editor, range }: any) => {
  //         editor
  //           .chain()
  //           .focus()
  //           .deleteRange(range)
  //           .setNode("heading", { level: 2 })
  //           .run();
  //       },
  //     },
  //     {
  //       title: "Heading 3",
  //       command: ({ editor, range }: any) => {
  //         editor
  //           .chain()
  //           .focus()
  //           .deleteRange(range)
  //           .setNode("heading", { level: 3 })
  //           .run();
  //       },
  //     },
  //     {
  //       title: "Bulleted List",
  //       command: ({ editor, range }: any) => {
  //         editor.chain().focus().deleteRange(range).toggleBulletList().run();
  //       },
  //     },
  //     {
  //       title: "Numbered List",
  //       command: ({ editor, range }: any) => {
  //         editor.chain().focus().deleteRange(range).toggleOrderedList().run();
  //       },
  //     },
  //     {
  //       title: "To-do List",
  //       command: ({ editor, range }: any) => {
  //         editor.chain().focus().deleteRange(range).toggleTaskList().run();
  //       },
  //     },
  //     {
  //       title: "Quote",
  //       command: ({ editor, range }: any) => {
  //         editor.chain().focus().deleteRange(range).toggleBlockquote().run();
  //       },
  //     },
  //     {
  //       title: "Divider",
  //       command: ({ editor, range }: any) => {
  //         editor.chain().focus().deleteRange(range).setHorizontalRule().run();
  //       },
  //     },
  //     {
  //       title: "Table",
  //       isBasicVersion: isBasicVersion,
  //       command: ({ editor, range }: any) => {
  //         editor.chain().focus().deleteRange(range).insertTable().run();
  //       },
  //     },
  //     {
  //       title: "Image",
  //       isBasicVersion: isBasicVersion,
  //       command: ({ editor, range }: any) => {
  //         openImageResizableModal(range);
  //       },
  //     },
  //     {
  //       title: "Video",
  //       isBasicVersion: isBasicVersion,
  //       command: ({ editor, range }: any) => {
  //         openVideoResizableModal(range);
  //       },
  //     },
  //     {
  //       title: "Google Form",
  //       isBasicVersion: isBasicVersion,
  //       command: ({ editor, range }: any) => {
  //         openGoogleFormModal(range);
  //       },
  //     },

  //     {
  //       title: "Chapter Link",
  //       isBasicVersion: isBasicVersion,
  //       command: ({ editor, range }: any) => {
  //         openChaptersModal(range);
  //       },
  //     },
  //     {
  //       title: "Paper form",
  //       isBasicVersion: isBasicVersion,
  //       command: ({ editor, range }: any) => {
  //         openPaperformModal(range);
  //       },
  //     },
  //     {
  //       title: "Gallery",
  //       isBasicVersion: isBasicVersion,
  //       command: ({ editor, range }: any) => {
  //         openGalleryImageModal(range);
  //       },
  //     },
  //   ];
  // }
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
      CustomImage.configure({
        HTMLAttributes: {
          class: "custom-image",
        },
      }),
      ResizableImage,
      ResizableVideo,
      CustomVideo.configure({
        // HTMLAttributes: {
        //   class: "custom-video",
        // },
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
      ChapterLink,
      CustomLink,
      ImageGalleryExtension,
      CustomPaperform.configure({
        HTMLAttributes: {
          class: "custom-type-form",
          editMode: true,
          src: "",
        },
      }),
      SlashCommands.configure({
        commands: [
          {
            title: "Paragraph",
            command: ({ editor, range }: any) => {
              editor.chain().focus().deleteRange(range).setParagraph().run();
            },
          },
          {
            title: "Heading 1",
            command: ({ editor, range }: any) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 1 })
                .run();
            },
          },
          {
            title: "Heading 2",
            command: ({ editor, range }: any) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 2 })
                .run();
            },
          },
          {
            title: "Heading 3",
            command: ({ editor, range }: any) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 3 })
                .run();
            },
          },
          {
            title: "Bulleted List",
            command: ({ editor, range }: any) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleBulletList()
                .run();
            },
          },
          {
            title: "Numbered List",
            command: ({ editor, range }: any) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleOrderedList()
                .run();
            },
          },
          {
            title: "To-do List",
            command: ({ editor, range }: any) => {
              editor.chain().focus().deleteRange(range).toggleTaskList().run();
            },
          },
          {
            title: "Quote",
            command: ({ editor, range }: any) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleBlockquote()
                .run();
            },
          },
          {
            title: "Divider",
            command: ({ editor, range }: any) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setHorizontalRule()
                .run();
            },
          },
          {
            title: "Table",
            isBasicVersion: isBasicVersion,
            command: ({ editor, range }: any) => {
              editor.chain().focus().deleteRange(range).insertTable().run();
            },
          },
          {
            title: "Image",
            isBasicVersion: isBasicVersion,
            command: ({ editor, range }: any) => {
              openImageResizableModal(range);
            },
          },
          {
            title: "Video",
            isBasicVersion: isBasicVersion,
            command: ({ editor, range }: any) => {
              openVideoResizableModal(range);
            },
          },
          {
            title: "Google Form",
            isBasicVersion: isBasicVersion,
            command: ({ editor, range }: any) => {
              openGoogleFormModal(range);
            },
          },

          {
            title: "Chapter Link",
            isBasicVersion: isBasicVersion,
            command: ({ editor, range }: any) => {
              openChaptersModal(range);
            },
          },
          {
            title: "Paper form",
            isBasicVersion: isBasicVersion,
            command: ({ editor, range }: any) => {
              openPaperformModal(range);
            },
          },
          {
            title: "Gallery",
            isBasicVersion: isBasicVersion,
            command: ({ editor, range }: any) => {
              openGalleryImageModal(range);
            },
          },
        ],
        component: CommandList,
      }),
    ],
    onUpdate({ editor }) {
      if (onChange) {
        const data = editor.getJSON();
        const dataInText = editor.getText();
        onChange(data, dataInText);
      }
    },
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [videoIsOpen, setVideoIsOpen] = useState(false);
  const [fileIsOpen, setFileIsOpen] = useState(false);
  const [googleFormIsOpen, setGoogleFormIsOpen] = useState(false);
  const [typeformIsOpen, setTypeformIsOpen] = useState(false);
  const [chaptersModal, setChaptersModal] = useState(false);
  const [imageResizableIsOpen, setImageResizableOpen] = useState(false);
  const [videoResizableIsOpen, setVideoResizableOpen] = useState(false);
  const [paperformIsOpen, setPaperformIsOpen] = useState(false);
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false);

  const openModal = (range: any) => {
    setIsOpen(true);
    setImageRange(range);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openVideoModal = (range: any) => {
    setVideoIsOpen(true);
    setVideoRange(range);
  };

  const closeVideoModal = () => {
    setVideoIsOpen(false);
  };

  const openFileModal = (range: any) => {
    setFileIsOpen(true);
    setFileRange(range);
  };

  const closeFileModal = () => {
    setFileIsOpen(false);
  };

  const openGoogleFormModal = (range: any) => {
    setGoogleFormIsOpen(true);
    setVideoRange(range);
  };

  const closeGoogleFormModal = () => {
    setGoogleFormIsOpen(false);
  };

  const openTypeformModal = (range: any) => {
    setTypeformIsOpen(true);
    setVideoRange(range);
  };

  const closeTypeformModal = (range: any) => {
    setTypeformIsOpen(false);
  };

  const openChaptersModal = (range: any) => {
    setChaptersModal(true);
    setVideoRange(range);
  };

  const closeChaptersModal = () => {
    setChaptersModal(false);
  };

  const openImageResizableModal = (range: any) => {
    setImageResizableOpen(true);
    setVideoRange(range);
  };

  const closeImageResizableModal = (range: any) => {
    setImageResizableOpen(false);
    setVideoRange(range);
  };
  const openVideoResizableModal = (range: any) => {
    setVideoResizableOpen(true);
    setVideoRange(range);
  };

  const closeVideoResizableModal = (range: any) => {
    setVideoResizableOpen(false);
    setVideoRange(range);
  };

  const openPaperformModal = (range: any) => {
    setPaperformIsOpen(true);
    setVideoRange(range);
  };

  const closePaperformModal = (range: any) => {
    setPaperformIsOpen(false);
    setVideoRange(range);
  };

  const openGalleryImageModal = (range: any) => {
    setGalleryModalIsOpen(true);
    setVideoRange(range);
  };

  const closeGalleryImageModal = (range: any) => {
    setGalleryModalIsOpen(false);
    setVideoRange(range);
  };

  useEffect(() => {
    if (!editor) return;
    let { from, to } = editor.state.selection;
    editor.commands.setContent(value, false, {
      preserveWhitespace: "full",
    });
    editor.commands.setTextSelection({ from, to });
    // if (editor) {
    //   editor.commands.setContent(value);
    // }
  }, [editor, value]);

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <style type="text/css">
          {`
   

     .custom-type-form{
      width: 500px;
    border: none;
    
    }
     .custom-type-form-float-none {
        float: none;
        text-align: center;
        display: flex;
        justify-content: center;

    }
    .custom-type-form-float-left {
        float: left;
            margin-right: 40px;
    }
    .custom-type-form-float-right {
        float: right;
            margin-left: 40px;
    }

  

 
 

  

      `}
        </style>
      </Helmet>
      <div>
        {editor && (
          <div
            className="table-options"
            style={{ display: editor.isActive("table") ? "flex" : "none" }}
          >
            <div className="table-options-section">
              <div>
                <div> Table Column Operations</div>

                <button
                  onClick={() => editor.chain().focus().addColumnBefore().run()}
                  className="table-options-button"
                >
                  addColumnBefore
                </button>
                <button
                  onClick={() => editor.chain().focus().addColumnAfter().run()}
                  className="table-options-button"
                >
                  addColumnAfter
                </button>
                <button
                  onClick={() => editor.chain().focus().deleteColumn().run()}
                  className="table-options-button"
                >
                  deleteColumn
                </button>
              </div>
            </div>
            <div className="table-options-section">
              <div>
                <div> Table Row Operations</div>
                <button
                  onClick={() => editor.chain().focus().addRowBefore().run()}
                  className="table-options-button"
                >
                  addRowBefore
                </button>
                <button
                  onClick={() => editor.chain().focus().addRowAfter().run()}
                  className="table-options-button"
                >
                  addRowAfter
                </button>
                <button
                  onClick={() => editor.chain().focus().deleteRow().run()}
                  className="table-options-button"
                >
                  deleteRow
                </button>
              </div>
            </div>
            <div className="table-options-section">
              <div>
                <div> Table Toggle Headers</div>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeaderColumn().run()
                  }
                  className="table-options-button"
                >
                  toggleHeaderColumn
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleHeaderRow().run()}
                  className="table-options-button"
                >
                  toggleHeaderRow
                </button>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeaderCell().run()
                  }
                  className="table-options-button"
                >
                  toggleHeaderCell
                </button>
              </div>
            </div>
            <div className="table-options-section">
              <div>
                <div> Table Merge/Split Cells</div>
                <button
                  onClick={() => editor.chain().focus().mergeCells().run()}
                  className="table-options-button"
                >
                  mergeCells
                </button>
                <button
                  onClick={() => editor.chain().focus().splitCell().run()}
                  className="table-options-button"
                >
                  splitCell
                </button>
                <button
                  onClick={() => editor.chain().focus().mergeOrSplit().run()}
                  className="table-options-button"
                >
                  mergeOrSplit
                </button>
              </div>
            </div>

            <button
              onClick={() => editor.chain().focus().deleteTable().run()}
              className="table-options-button"
            >
              deleteTable
            </button>
          </div>
        )}

        {editor && (
          <Floatingbar
            editor={editor}
            openGalleryImageModal={openGalleryImageModal}
          />
        )}
        <EditorContent editor={editor} />

        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          editor={editor}
          range={imageRange}
          imageCallback={imageCallback}
          isResizable={false}
        />
        <VideoModal
          modalIsOpen={videoIsOpen}
          closeModal={closeVideoModal}
          editor={editor}
          range={videoRange}
          isResizable={false}
        />
        <ImageModal
          modalIsOpen={imageResizableIsOpen}
          closeModal={closeImageResizableModal}
          editor={editor}
          range={videoRange}
          imageCallback={imageCallback}
          isResizable
        />
        <VideoModal
          modalIsOpen={videoResizableIsOpen}
          closeModal={closeVideoResizableModal}
          editor={editor}
          range={videoRange}
          isResizable
        />
        <FileUploadModal
          modalIsOpen={fileIsOpen}
          closeModal={closeFileModal}
          editor={editor}
          range={fileRange}
          imageCallback={imageCallback}
        />
        <GoogleFormModal
          modalIsOpen={googleFormIsOpen}
          closeModal={closeGoogleFormModal}
          editor={editor}
          range={videoRange}
        />
        <TypeformModal
          modalIsOpen={typeformIsOpen}
          closeModal={closeTypeformModal}
          editor={editor}
          range={videoRange}
        />
        {paperformIsOpen && (
          <PaperformModal
            modalIsOpen={paperformIsOpen}
            closeModal={closePaperformModal}
            editor={editor}
            range={videoRange}
          />
        )}
        {chaptersModal && (
          <ChaptersModal
            modalIsOpen={chaptersModal}
            closeModal={closeChaptersModal}
            editor={editor}
            range={videoRange}
            businessId={businessId}
          />
        )}
        {galleryModalIsOpen && (
          <GalleryImageModal
            modalIsOpen={galleryModalIsOpen}
            closeModal={closeGalleryImageModal}
            editor={editor}
            range={videoRange}
            imageCallback={bulkImageCallback}
          />
        )}
      </div>
    </>
  );
};

export default Editor;
