/* eslint-disable no-unused-vars */
import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReadOnlyEditor from "./readonly";
import MainEditor from "./editor";

import { ApolloProvider } from "@apollo/client";
import { client } from "./clientFactory";

interface Props {
  onChange?: (data: any, dataInText: string) => void;
  value?: any;
  readonly?: boolean;
  imageCallback?: any;
  deviceType?: any;
  businessId?: any;
  sopIdCallback?: any;
  bulkImageCallback?: any;
  isBasicVersion?: boolean;
}

const Editor: FC<Props> = ({
  onChange,
  value,
  readonly,
  imageCallback,
  deviceType,
  businessId,
  sopIdCallback,
  bulkImageCallback,
  isBasicVersion,
}) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://paperform.co/__embed.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <ApolloProvider client={client}>
      <>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <style type="text/css">
            {`
      .ProseMirror {
    padding: 20px;
    padding-left: 10px;
  }
  .ProseMirror-focused {
    outline: none !important;
  }
  .ProseMirror img{
        width: 100%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        &.ProseMirror-selectednode {
            outline: 3px solid #68cef8;
        }
    }
    .custom-image-small {
        max-width: 200px;
    }
    .custom-image-medium {
        max-height:300px;
        width: auto
    }
    .custom-image-large {
        max-width: 100%;
    }
    .custom-image-float-none {
        float: none;
    }
    .custom-image-float-left {
        float: left;
            margin-right: 40px;
    }
    .custom-image-float-right {
        float: right;
            margin-left: 40px;
    }

    .react-draggable{
      transform: none !important;
    }

    .resizable-image-float-none{
       float: none;
       display: flex;
       width: 100%;
       justify-content: center;
    }

    .resizable-image-float-left{
        float: left;
          margin-right: 40px;
    }

     .resizable-image-float-right{
        float: right;
          margin-left: 40px;
    }

      .custom-video-float-none {
        float: none;
        text-align: center;
    }
    .custom-video-float-left {
        float: left;
            margin-right: 40px;
    }
    .custom-video-float-right {
        float: right;
            margin-left: 40px;
    }

     .resizable-video-float-none {
         float: none;
       display: flex;
       width: 100%;
       justify-content: center;
    }
    .resizable-video-float-left {
        float: left;
            margin-right: 40px;
    }
    .resizable-video-float-right {
        float: right;
            margin-left: 40px;
    }

    .custom-video{
      width: 500px;
      height: 300px;
    }

    .custom-google-form{
      width: 500px;
      background: #eee;
      height: 100%;
        // height: 500px !important;
    }

     .custom-type-form{
      width: 500px;
    border-radius: 8px;
   
    
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

    @media only screen and (max-width: 768px) {
  .custom-google-form{
      width: 100%;
      //  height: 500px !important;
    }

    .custom-type-form{
       width: 100%;
    }

      .react-draggable{
         max-width: 340px !important;
    height: auto !important;
    }

     .resizable-video-class{
       width: 100% !important;
       height: auto !important;
  }

  img{
    max-width: 100%
  }



}


    video:-webkit-full-page-media {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    margin: auto;
    width:100%;
    height:100%
}

p{
  line-height: 25px
}

li p{
      margin-top: 10px;
    margin-bottom: 10px;
}
h1,
h2,
h3,
h4 {
  font-weight: 700;
}

ul,
ol {
  padding-left: 17px;
}

ol {
  padding-left: 15px;
}

blockquote {
  padding-left: 0.95rem;
}


    

  .ProseMirror p.is-editor-empty:first-child:before {
    content: attr(data-placeholder);
    float: left;
    color: #ced4da;
    pointer-events: none;
    height: 0;
  }

  .floating-bar-container {
    display: flex;
    background-color: rgb(47, 51, 54);
    line-height: 0;
    align-items: center;
    padding: 8px 10px;
    border-radius: 4px;
  }

  .marks-item-container {
    width: 30px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;
  }

  ul[data-type="taskList"] p {
    margin: 0;
  }

  ul[data-type="taskList"] li {
    display: flex;
  }

  ul[data-type="taskList"] li > label {
    flex: 0 0 auto;
    margin-right: 0.5rem;
    user-select: none;
  }

  ul[data-type="taskList"] li > div {
    flex: 1 1 auto;
  }

  .ProseMirror blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(13, 13, 13, 0.1);
  }

  .ProseMirror hr {
    border: none;
    border-top: 2px solid rgba(13, 13, 13, 0.1);
    margin: 2rem 0;
  }

  #tippy-1 {
    background-color: none;
    border-radius: 0px;
    width: auto;
    height: auto;
    overflow-y: scroll;
    box-shadow: none;
  }

  div[data-tippy-root] {
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    max-height: 300px;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 2px 4px;
  }

  div[data-tippy-root] ul {
    list-style: none !important;
    text-align: left !important;
    height: 100% !important;
    padding: 8px 0px !important;
    margin: 0px !important;
  }

  div[data-tippy-root] ul li {
    padding: 0px !important;
    margin: 0px !important;
  }

  .command-list-item-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    width: 100%;
    cursor: pointer;
    border: none;
    opacity: 1;
    color: rgb(0, 0, 0);
    outline: none;
    padding: 0px 21px;
    height: 44px;
  }
  .file{
    text-align:center;
    display: flex;
    justify-content: center;
  }

  .custom-file{
    width: 200px; 
    height: 200px;
    background:#999
  }


table{
    border-collapse: collapse;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
     width: auto !important;
 border-radius: 5px;
 display: block;
  max-width: -moz-fit-content;
  max-width: fit-content;
  overflow-x: auto;
  white-space: nowrap;

  }

 

  .Prosemirror th{
 background-color: #f1f3f5;
      font-weight: bold;
      text-align: left;
          padding: 9px 22px;
  }


  .Prosemirror .selectedCell:after{
  background: rgba(200, 200, 255, 0.4);
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
      position: absolute;
      z-index: 2;
  }

  .Prosemirror .column-resize-handle{
 background-color: #adf;
      bottom: -2px;
      position: absolute;
      right: -2px;
      pointer-events: none;
      top: 0;
      width: 4px;
  }

  table p{
    margin: 0;
  }

 

.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}

[data-rmiz-wrap="visible"], [data-rmiz-wrap="hidden"] {
    position: unset;
    display: unset;
    align-items: unset;
}

.chapter-link-container:hover{
  border: 1px solid #eee !important;
}

.table-options{
      position: sticky;
    top: 0;
    background: #fff;
    z-index: 100;
     min-height: 50px;
    display: flex;
    align-items: center;

}


.table-options-section{
      display: flex;
    flex-direction: column;
    flex: 1 1 auto;
}

.table-options-button{
  margin-right: 5px;
  margin-top: 5px
}

table::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

/* Track */
table::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
table::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 5px;
}

/* Handle on hover */
table::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.ReactModal__Overlay--after-open{
     z-index: 10000;
}

.custom-chapter-link{
  color: #999
}

.ReactGridGallery_tile{
  border-radius: 8px;
}

.ReactGridGallery_tile img{
  border-radius: 8px;
}

.ReactGridGallery_tile-viewport{
  border-radius: 8px;
}


 

  

      `}
          </style>
        </Helmet>
        {readonly && (
          <ReadOnlyEditor
            value={value}
            deviceType={deviceType}
            sopIdCallback={sopIdCallback}
          />
        )}
        {!readonly && (
          <MainEditor
            value={value}
            imageCallback={imageCallback}
            onChange={onChange}
            businessId={businessId}
            bulkImageCallback={bulkImageCallback}
            isBasicVersion={isBasicVersion}
          />
        )}
      </>
    </ApolloProvider>
  );
};

Editor.defaultProps = {
  readonly: false,
};

export default Editor;
