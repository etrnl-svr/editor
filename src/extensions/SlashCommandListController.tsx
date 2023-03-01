import React, { FC, useState, useEffect } from "react";

interface Props {
  items: any;
  component: any;
  command: any;
}
const SlashCommandListController: FC<Props> = ({
  items,
  component: Component,
  command,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onKeyDown = ({ event }: any) => {
    if (event.key === "ArrowUp") {
      upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      downHandler();
      return true;
    }

    if (event.key === "Enter") {
      enterHandler();
      return true;
    }

    return false;
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + items.length - 1) % items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  const selectItem = (index: number) => {
    const item = items[index];

    if (item) {
      command(item);
    }
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [items.length]);

  return (
    <Component
      items={items}
      selectedIndex={selectedIndex}
      selectItem={selectItem}
    />
  );
};

export default SlashCommandListController;
