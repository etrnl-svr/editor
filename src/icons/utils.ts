export const getSizeDimension = (size?: string) => {
  const style = {
    width: "20px",
    height: "20px",
  };
  if (size === "mini") {
    style.width = "11px";
    style.height = "11px";
  } else if (size === "tiny") {
    style.width = "14px";
    style.height = "14px";
  } else if (size === "small") {
    style.width = "16px";
    style.height = "16px";
  } else if (size === "medium") {
    style.width = "18px";
    style.height = "18px";
  } else if (size === "large") {
    style.width = "20px";
    style.height = "20px";
  } else if (size === "big") {
    style.width = "22px";
    style.height = "22px";
  } else if (size === "huge") {
    style.width = "25px";
    style.height = "25px";
  } else if (size === "massive") {
    style.width = "30px";
    style.height = "30px";
  }

  return style;
};
