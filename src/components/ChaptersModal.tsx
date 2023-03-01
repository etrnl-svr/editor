import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import gql from "graphql-tag";
import Modal from "react-modal";
import { useQuery, useLazyQuery } from "@apollo/client";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "500px",
  },
};

const GET_SOP_LIST = gql`
  query AllChapters($filter: FilterFindManySopInput, $page: Int) {
    SopPagination(filter: $filter, page: $page) {
      items {
        chapter
        category

        eid

        entity
      }
      count
    }
  }
`;

type queryResponse = {
  data: any;
  loading: boolean;
  error?: any;
  fetchMore?: any;
};

const listType: any = [];

const ChaptersModal = ({
  modalIsOpen,
  closeModal,
  editor,
  range,
  businessId,
}) => {
  const [page, setPage] = useState(1);
  const [sopList, setSopList] = useState(listType);
  const [searchQuery, setSearchQuery] = useState("");
  const [getSopList, { data, loading, fetchMore }] = useLazyQuery(GET_SOP_LIST);

  useEffect(() => {
    if (businessId) {
      getSopList({
        variables: {
          page: page,
          filter: {
            entity: businessId,
          },
        },
      });
    }
  }, [businessId]);

  useEffect(() => {
    if (page === 1) {
      if (data?.SopPagination?.items?.length) {
        setSopList([...data?.SopPagination?.items]);
      } else {
        setSopList([]);
      }
    }
  }, [data?.SopPagination?.items]);

  useEffect(() => {
    setPage(1);
    if (businessId) {
      getSopList({
        variables: {
          page: page,
          filter: {
            entity: businessId,
            query: searchQuery.trim(),
          },
        },
      });
    }
  }, [searchQuery.trim()]);

  //  const sopList = data?.SopPagination?.items;

  const fetchMoreSops = () => {
    fetchMore({
      variables: {
        page: page + 1,
        filter: {
          entity: businessId,
        },
      },
    })
      .then((response) => {
        if (response?.data?.SopPagination?.items?.length) {
          let list: any = sopList;
          response?.data?.SopPagination?.items.forEach((sop) => {
            list.push(sop);
          });
          setSopList([...list]);
          setPage(page + 1);
        }
      })
      .catch((error) => {
        console.log("Error in fetchinh sop", error);
      });
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <div style={{ textAlign: "right" }}>
          <button onClick={closeModal}>close</button>
        </div>

        <div>
          <div style={{ marginBottom: "10px", fontSize: "18px" }}>
            Chapters List
          </div>
          <div
            style={{ height: "40px", display: "flex", alignItems: "center" }}
          >
            <input
              style={{ width: "100%", height: "30px" }}
              onChange={(e) => {
                setSearchQuery(e?.target?.value);
              }}
              value={searchQuery}
              placeholder="Search by chapter name"
            />
          </div>
          <div>
            {sopList &&
              !!sopList.length &&
              sopList?.map((sop: any, index) => {
                return (
                  <div
                    onClick={() => {
                      editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .setChapter({ sopId: sop?.eid })
                        .run();
                      closeModal();
                    }}
                    style={{
                      padding: "10px 0px",
                      borderBottom: "1px solid #ddd",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "16px" }}>{sop?.chapter}</div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#777",
                      }}
                    >
                      {sop?.category}
                    </div>
                  </div>
                );
              })}
          </div>
          {data?.SopPagination?.count > sopList?.length && (
            <div>
              <button onClick={fetchMoreSops}>Next</button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ChaptersModal;
