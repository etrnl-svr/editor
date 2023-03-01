/* eslint-disable no-unused-vars */
import React, { FC } from "react";

interface Props {
  items: any;
  selectItem: (idx: string) => void;
}

const CommandsList: FC<Props> = (props) => {
  const { items, selectItem } = props;
  console.log("Items Items", items);
  return (
    <ul style={{ width: "200px" }}>
      {items.map(({ title }: any, idx: string) => (
        <li key={idx} onClick={() => selectItem(idx)}>
          <div className="command-list-item-container">{title}</div>
        </li>
      ))}
    </ul>
  );
};

export default CommandsList;
