import React, { FC } from "react";

// Custom Import..
import { getSizeDimension } from "./utils";

interface Props {
  fill?: string;
  size?: string;
  style?: object;
  className?: string;
}
const UnderlineIcon: FC<Props> = ({ fill, size, style, className }) => {
  const sizeStyle = getSizeDimension(size);
  return (
    <svg
      className={className}
      style={{ ...sizeStyle, ...style }}
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 46C31.3043 46 36.3914 43.8929 40.1421 40.1421C43.8929 36.3914 46 31.3043 46 26V0H38V26C38 29.1826 36.7357 32.2348 34.4853 34.4853C32.2348 36.7357 29.1826 38 26 38C22.8174 38 19.7652 36.7357 17.5147 34.4853C15.2643 32.2348 14 29.1826 14 26V0H6V26C6 31.3043 8.10714 36.3914 11.8579 40.1421C15.6086 43.8929 20.6957 46 26 46V46Z"
        fill={fill}
      />
      <path d="M52 52H0V60H52V52Z" fill={fill} />
    </svg>
  );
};

UnderlineIcon.defaultProps = {
  fill: "#ccc",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: "",
};

export default UnderlineIcon;
