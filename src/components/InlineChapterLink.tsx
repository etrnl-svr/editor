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
    <p>
      <a
        onClick={() => {
          if (!props.node.type.attrs.deviceType.default) {
            window.postMessage(
              {
                message: `${props.node.attrs.sopId}`,
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
        {sop?.chapter}
      </a>
    </p>
  );
};
