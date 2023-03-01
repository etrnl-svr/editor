/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from "react";

// Custom Import..
import { getSizeDimension } from "./utils";

interface Props {
  fill?: string;
  size?: string;
  style?: object;
  className?: string;
}

const StrikeThroughIcon: FC<Props> = ({ fill, size, style, className }) => {
  const sizeStyle = getSizeDimension(size);
  return (
    <svg
      className={className}
      style={{ ...sizeStyle, ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width="29.993"
      height="18.997"
      viewBox="0 0 29.993 18.997"
    >
      <g id="strikethrough" transform="translate(0.698 -2.5)">
        <g id="Group_9713" data-name="Group 9713" transform="translate(0 3)">
          <path
            id="Path_3518"
            data-name="Path 3518"
            d="M5.883,14.2h4.339L8.087,7.115ZM6.1,3h4.038L16.2,21H12.322l-1.1-3.7H4.92L3.736,21H0Z"
            transform="translate(0 -3)"
            fill={fill}
            strokeWidth="1"
            fillRule="evenodd"
          />
          <path
            id="Path_3519"
            data-name="Path 3519"
            d="M15.194,10.672a5.422,5.422,0,0,0,1.394-.313,1.071,1.071,0,0,0,.753-1.014,1.208,1.208,0,0,0-.574-1.158,3.54,3.54,0,0,0-1.684-.319,2.176,2.176,0,0,0-1.764.626,2.623,2.623,0,0,0-.494,1.252H9.432A5.286,5.286,0,0,1,10.419,6.8Q11.813,5,15.207,5a8.4,8.4,0,0,1,3.924.889,3.425,3.425,0,0,1,1.715,3.355V15.5q0,.651.025,1.578a2.007,2.007,0,0,0,.21.952,1.264,1.264,0,0,0,.518.413v.526H17.773a4.019,4.019,0,0,1-.222-.776q-.062-.363-.1-.826a7.245,7.245,0,0,1-1.678,1.365,4.991,4.991,0,0,1-2.567.664,4.373,4.373,0,0,1-3.017-1.058,3.8,3.8,0,0,1-1.191-3A3.906,3.906,0,0,1,10.913,11.7,8.4,8.4,0,0,1,14,10.822Zm2.135,1.665a3.8,3.8,0,0,1-.672.344,5.559,5.559,0,0,1-.932.244l-.79.15a5.046,5.046,0,0,0-1.592.488,1.642,1.642,0,0,0-.814,1.515,1.607,1.607,0,0,0,.5,1.321,1.863,1.863,0,0,0,1.215.407,3.546,3.546,0,0,0,2.091-.676,2.9,2.9,0,0,0,.993-2.466Z"
            transform="translate(7.198 -1.401)"
            fill={fill}
            strokeWidth="1"
            fillRule="evenodd"
          />
          <rect
            id="Rectangle_17353"
            data-name="Rectangle 17353"
            width="29"
            height="2"
            transform="translate(0 8.997)"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

StrikeThroughIcon.defaultProps = {
  fill: "#ccc",
  size: "medium", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: "",
};

export default StrikeThroughIcon;
