import React, { FC } from "react";

// Custom Import..
import { getSizeDimension } from "./utils";

interface Props {
  fill?: string;
  size?: string;
  style?: object;
  className?: string;
}
const BoldIcon: FC<Props> = ({ fill, size, style, className }) => {
  const sizeStyle = getSizeDimension(size);
  return (
    <svg
      className={className}
      style={{ ...sizeStyle, ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width="13.488"
      height="18"
      viewBox="0 0 13.488 18"
    >
      <g id="bold" transform={"translate(-29 -22)"}>
        <path
          id="Path_3513"
          data-name="Path 3513"
          d="M39.546,30.209A5.143,5.143,0,0,0,35.429,22H29V40h8.357a5.143,5.143,0,0,0,2.189-9.791Zm-7.975-5.638h3.857a2.571,2.571,0,1,1,0,5.143H31.571Zm5.786,12.857H31.571V32.286h5.786a2.571,2.571,0,1,1,0,5.143Z"
          transform="translate(0 0)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

BoldIcon.defaultProps = {
  fill: "#ccc",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: "",
};

export default BoldIcon;
