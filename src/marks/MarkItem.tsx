import React, { FC } from "react";

// import components
import BoldIcon from "../icons/BoldIcon";
import ItalicIcon from "../icons/ItalicIcon";
import HighlightIcon from "../icons/HighlightIcon";
import StrikeIcon from "../icons/StrikeIcon";
import LeftAlignIcon from "../icons/LeftAlignIcon";
import RightAlignIcon from "../icons/RightAlignIcon";
import CenterAlignIcon from "../icons/CenterAlignIcon";
import LinkIcon from "../icons/LinkIcon";
import UnderlineIcon from "../icons/UnderlineIcon";
import EditIcon from "../icons/EditIcon";
import { setLink } from "../helper";

interface Props {
  editor: any;
  type: string;
  openGalleryImageModal?: any;
}

const getOnClickFunc = (
  editor: any,
  type: string,
  openGalleryImageModal: any
) => {
  switch (type) {
    case "bold":
      return editor.chain().focus().toggleBold().run();

    case "italic":
      return editor.chain().focus().toggleItalic().run();

    case "strike":
      return editor.chain().focus().toggleStrike().run();

    case "underline":
      return editor.chain().focus().toggleUnderline().run();

    case "highlight":
      return editor.chain().focus().toggleHighlight().run();
    case "left":
      return editor.chain().focus().setTextAlign("left").run();
    case "right":
      return editor.chain().focus().setTextAlign("right").run();
    case "center":
      return editor.chain().focus().setTextAlign("center").run();
    case "link":
      setLink(editor);
      break;

    case "image-left":
      return editor.chain().focus().setExternalImage({ float: "left" }).run();
    case "image-center":
      return editor.chain().focus().setExternalImage({ float: "none" }).run();
    case "image-right":
      return editor.chain().focus().setExternalImage({ float: "right" }).run();
    case "video-left":
      return editor.chain().focus().setExternalVideo({ float: "left" }).run();
    case "video-center":
      return editor.chain().focus().setExternalVideo({ float: "none" }).run();
    case "video-right":
      return editor.chain().focus().setExternalVideo({ float: "right" }).run();
    case "google-form-left":
      return editor.chain().focus().setGoogleForm({ float: "left" }).run();
    case "google-form-center":
      return editor.chain().focus().setGoogleForm({ float: "none" }).run();
    case "google-form-right":
      return editor.chain().focus().setGoogleForm({ float: "right" }).run();

    case "type-form-left":
      return editor.chain().focus().setPaperform({ float: "left" }).run();
    case "type-form-center":
      return editor.chain().focus().setPaperform({ float: "none" }).run();
    case "type-form-right":
      return editor.chain().focus().setPaperform({ float: "right" }).run();

    case "resizable-image-left":
      return editor.chain().focus().setResizableImage({ float: "left" }).run();
    case "resizable-image-center":
      return editor.chain().focus().setResizableImage({ float: "none" }).run();
    case "resizable-image-right":
      return editor.chain().focus().setResizableImage({ float: "right" }).run();

    case "resizable-video-left":
      return editor.chain().focus().setResizableVideo({ float: "left" }).run();
    case "resizable-video-center":
      return editor.chain().focus().setResizableVideo({ float: "none" }).run();
    case "resizable-video-right":
      return editor.chain().focus().setResizableVideo({ float: "right" }).run();

    case "image-gallery-edit": {
      console.log("Image Gallry edit", editor.getAttributes("image-gallery"));
      return openGalleryImageModal();
    }
  }
};

const getItemCom = (editor: any, type: string) => {
  const isActiveFill = editor.isActive(type) ? "#fff" : "#ccc";
  const isActiveTextAlignFill = editor.isActive({ textAlign: type })
    ? "#fff"
    : "#ccc";
  const isCursorOverLink = editor.getAttributes("link").href ? "#fff" : "#ccc";

  const isImageCenterFill = editor.isActive("custom-image", {
    float: "none",
  })
    ? "#fff"
    : "#ccc";

  const isImageLeftFill = editor.isActive("custom-image", {
    float: "left",
  })
    ? "#fff"
    : "#ccc";

  const isImageRightFill = editor.isActive("custom-image", {
    float: "right",
  })
    ? "#fff"
    : "#ccc";

  const isVideoLeftFill = editor.isActive("custom-video", {
    float: "left",
  })
    ? "#fff"
    : "#ccc";

  const isVideoCenterFill = editor.isActive("custom-video", {
    float: "none",
  })
    ? "#fff"
    : "#ccc";

  const isVideoRightFill = editor.isActive("custom-video", {
    float: "right",
  })
    ? "#fff"
    : "#ccc";

  const isGoogleGormLeftFill = editor.isActive("custom-google-form", {
    float: "left",
  })
    ? "#fff"
    : "#ccc";

  const isGoogleGormCenterFill = editor.isActive("custom-google-form", {
    float: "none",
  })
    ? "#fff"
    : "#ccc";

  const isGoogleGormRightFill = editor.isActive("custom-google-form", {
    float: "right",
  })
    ? "#fff"
    : "#ccc";

  const isTypeFormLeftFill = editor.isActive("custom-paper-form", {
    float: "left",
  })
    ? "#fff"
    : "#ccc";

  const isTypeFormCenterFill = editor.isActive("custom-paper-form", {
    float: "none",
  })
    ? "#fff"
    : "#ccc";

  const isTypeFormRightFill = editor.isActive("custom-paper-form", {
    float: "right",
  })
    ? "#fff"
    : "#ccc";

  const isResizableImageLeftFill = editor.isActive("resizable-image", {
    float: "left",
  })
    ? "#fff"
    : "#ccc";

  const isResizableImageCenterFill = editor.isActive("resizable-image", {
    float: "none",
  })
    ? "#fff"
    : "#ccc";

  const isResizableImageRightFill = editor.isActive("resizable-image", {
    float: "right",
  })
    ? "#fff"
    : "#ccc";

  const isResizableVideoLeftFill = editor.isActive("resizable-video", {
    float: "left",
  })
    ? "#fff"
    : "#ccc";

  const isResizableVideoCenterFill = editor.isActive("resizable-video", {
    float: "none",
  })
    ? "#fff"
    : "#ccc";

  const isResizableVideoRightFill = editor.isActive("resizable-video", {
    float: "right",
  })
    ? "#fff"
    : "#ccc";

  switch (type) {
    case "bold":
      return <BoldIcon fill={isActiveFill} />;

    case "italic":
      return <ItalicIcon fill={isActiveFill} />;

    case "strike":
      return <StrikeIcon fill={isActiveFill} />;

    case "underline":
      return <UnderlineIcon fill={isActiveFill} />;

    case "highlight":
      return <HighlightIcon fill={isActiveFill} />;

    case "left":
      return <LeftAlignIcon fill={isActiveTextAlignFill} />;

    case "right":
      return <RightAlignIcon fill={isActiveTextAlignFill} />;

    case "center":
      return <CenterAlignIcon fill={isActiveTextAlignFill} />;
    case "link":
      return <LinkIcon fill={isCursorOverLink} />;

    case "image-left":
      return <LeftAlignIcon fill={isImageLeftFill} />;
    case "image-center":
      return <CenterAlignIcon fill={isImageCenterFill} />;
    case "image-right":
      return <RightAlignIcon fill={isImageRightFill} />;

    case "video-left":
      return <LeftAlignIcon fill={isVideoLeftFill} />;
    case "video-center":
      return <CenterAlignIcon fill={isVideoCenterFill} />;
    case "video-right":
      return <RightAlignIcon fill={isVideoRightFill} />;
    case "google-form-left":
      return <LeftAlignIcon fill={isGoogleGormLeftFill} />;
    case "google-form-center":
      return <CenterAlignIcon fill={isGoogleGormCenterFill} />;
    case "google-form-right":
      return <RightAlignIcon fill={isGoogleGormRightFill} />;
    case "type-form-left":
      return <LeftAlignIcon fill={isTypeFormLeftFill} />;
    case "type-form-center":
      return <CenterAlignIcon fill={isTypeFormCenterFill} />;
    case "type-form-right":
      return <RightAlignIcon fill={isTypeFormRightFill} />;

    case "resizable-image-left":
      return <LeftAlignIcon fill={isResizableImageLeftFill} />;
    case "resizable-image-center":
      return <CenterAlignIcon fill={isResizableImageCenterFill} />;
    case "resizable-image-right":
      return <RightAlignIcon fill={isResizableImageRightFill} />;
    case "resizable-video-left":
      return <LeftAlignIcon fill={isResizableVideoLeftFill} />;
    case "resizable-video-center":
      return <CenterAlignIcon fill={isResizableVideoLeftFill} />;
    case "resizable-video-right":
      return <RightAlignIcon fill={isResizableVideoRightFill} />;

    case "image-gallery-edit":
      return <EditIcon />;
  }
};

const MarkItem: FC<Props> = ({ editor, type, openGalleryImageModal }) => {
  return (
    <div
      onClick={() => getOnClickFunc(editor, type, openGalleryImageModal)}
      className="marks-item-container"
    >
      {getItemCom(editor, type)}
    </div>
  );
};

export default MarkItem;
