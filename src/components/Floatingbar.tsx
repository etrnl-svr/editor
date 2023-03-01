import React, { FC } from "react";
import { BubbleMenu } from "@tiptap/react";

// import components

import MarkItem from "../marks/MarkItem";

interface Props {
  editor: any;
  openGalleryImageModal: any;
}

const Floatingbar: FC<Props> = ({ editor, openGalleryImageModal }) => {
  return (
    <BubbleMenu
      className="floating-bar-container"
      tippyOptions={{ duration: 100 }}
      editor={editor}
    >
      {!editor.isActive("custom-image") &&
        !editor.isActive("custom-video") &&
        !editor.isActive("custom-paper-form") &&
        !editor.isActive("custom-google-form") &&
        !editor.isActive("resizable-image") &&
        !editor.isActive("resizable-video") &&
        !editor.isActive("chapter-link") &&
        !editor.isActive("image-gallery") && (
          <>
            <MarkItem editor={editor} type="bold" />
            <MarkItem editor={editor} type="italic" />
            <MarkItem editor={editor} type="strike" />
            <MarkItem editor={editor} type="underline" />
            <MarkItem editor={editor} type="highlight" />
            <MarkItem editor={editor} type="left" />
            <MarkItem editor={editor} type="right" />
            <MarkItem editor={editor} type="center" />
            <MarkItem editor={editor} type="link" />
          </>
        )}
      {editor.isActive("custom-image") && (
        <>
          <MarkItem editor={editor} type="image-left" />
          <MarkItem editor={editor} type="image-center" />
          <MarkItem editor={editor} type="image-right" />
        </>
      )}
      {editor.isActive("custom-video") && (
        <>
          <MarkItem editor={editor} type="video-left" />
          <MarkItem editor={editor} type="video-center" />
          <MarkItem editor={editor} type="video-right" />
        </>
      )}
      {editor.isActive("custom-google-form") && (
        <>
          <MarkItem editor={editor} type="google-form-left" />
          <MarkItem editor={editor} type="google-form-center" />
          <MarkItem editor={editor} type="google-form-right" />
        </>
      )}
      {editor.isActive("custom-paper-form") && (
        <>
          <MarkItem editor={editor} type="type-form-left" />
          <MarkItem editor={editor} type="type-form-center" />
          <MarkItem editor={editor} type="type-form-right" />
        </>
      )}
      {editor.isActive("resizable-image") && (
        <>
          <MarkItem editor={editor} type="resizable-image-left" />
          <MarkItem editor={editor} type="resizable-image-center" />
          <MarkItem editor={editor} type="resizable-image-right" />
        </>
      )}
      {editor.isActive("resizable-video") && (
        <>
          <MarkItem editor={editor} type="resizable-video-left" />
          <MarkItem editor={editor} type="resizable-video-center" />
          <MarkItem editor={editor} type="resizable-video-right" />
        </>
      )}
      {editor.isActive("image-gallery") && (
        <MarkItem
          editor={editor}
          type="image-gallery-edit"
          openGalleryImageModal={openGalleryImageModal}
        />
      )}
    </BubbleMenu>
  );
};

export default Floatingbar;
