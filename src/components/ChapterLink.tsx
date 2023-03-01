import React, { useState, useEffect } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import gql from "graphql-tag";
import { useMutation, useLazyQuery } from "@apollo/client";

import { iconObj } from "../helper";

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

const GET_SOP_BY_ID = gql`
  query sopById($eid: String!) {
    SopById(eid: $eid) {
      chapter

      eid

      thumbnail
      thumbnail_color
    }
  }
`;

export default (props) => {
  const [getSopById, { data }] = useLazyQuery(GET_SOP_BY_ID);
  useEffect(() => {
    if (props.node.attrs.sopId) {
      getSopById({
        variables: {
          eid: props.node.attrs.sopId,
        },
      });
    }
  }, [props.node.attrs.sopId]);

  const sop = data?.SopById;
  return (
    <NodeViewWrapper>
      <div
        style={{
          minWidth: "177px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          padding: "0px 14px",
          backgroundColor: `${sop?.thumbnail_color || "#eee"}95`,
          borderRadius: "3px",
          cursor: "pointer",
          width: "fit-content",
          border: `1px solid ${sop?.thumbnail_color}`,
          margin: "10px 0",
        }}
        className="chapter-link-container"
        onClick={() => {
          console.log(
            "Device Type",
            props.node.type.attrs.sopIdCallback.default
          );

          if (!props.node.type.attrs.deviceType.default) {
            window.postMessage(
              {
                message: JSON.stringify(
                  {
                    sopId: props.node.attrs.sopId,
                    isSopId: true,
                  }
                  // `${props.node.attrs.sopId}`
                ),
              },
              "*"
            );
          } else {
            if (window?.ReactNativeWebView) {
              window?.ReactNativeWebView.postMessage(props.node.attrs.sopId);
            }
            props.node.type.attrs.sopIdCallback.default(props.node.attrs.sopId);
          }
        }}
      >
        {sop?.thumbnail && !iconObj[sop?.thumbnail] && (
          <img src={sop?.thumbnail} style={{ width: "20px", height: "auto" }} />
        )}
        {/* {((sop?.thumbnail && iconObj[sop?.thumbnail]) || !sop?.thumbnail) && (
          <img
            src={iconObj[sop?.thumbnail] || iconObj["checklist"]}
            style={{ width: "56px", marginLeft: "-16px", marginRight: "-16px" }}
          />
        )} */}
        {/* <img src={sop?.thumbnail} /> */}
        <div
          style={{
            flex: "1 1 auto",
            marginLeft: "10px",
            color: "#333b4f",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          {sop?.chapter}
        </div>
      </div>
    </NodeViewWrapper>
  );
};
