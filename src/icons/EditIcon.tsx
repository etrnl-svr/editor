import React, { FC } from "react";

// Custom Import..
import { getSizeDimension } from "./utils";

interface Props {
  fill?: string;
  size?: string;
  style?: object;
  className?: string;
}
const EditIcon: FC<Props> = ({ fill, size, style, className }) => {
  const sizeStyle = getSizeDimension(size);
  return (
    <svg
      className={className}
      style={{ ...sizeStyle, ...style }}
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.03427 1.56742L0.666394 8.94466C0.615631 8.99574 0.582015 9.06138 0.570213 9.13246L0.00445702 12.6006C-0.0042637 12.6543 -0.000148671 12.7093 0.0164647 12.7611C0.033078 12.8129 0.0617164 12.86 0.100031 12.8986C0.138345 12.9371 0.185244 12.9661 0.236881 12.983C0.288518 12.9999 0.343421 13.0043 0.397089 12.9958L3.87749 12.4465C3.94927 12.435 4.01561 12.4012 4.06711 12.3499L11.4346 4.97227L8.03427 1.56742ZM8.51999 1.08072L11.9207 4.48592L12.4968 3.90876C12.6563 3.74909 12.7829 3.55951 12.8692 3.35085C12.9556 3.1422 13 2.91855 13 2.69269C13 2.46682 12.9556 2.24318 12.8692 2.03452C12.7829 1.82586 12.6563 1.63628 12.4968 1.47662L11.5253 0.503902C11.3659 0.344151 11.1765 0.217425 10.9682 0.130963C10.7598 0.044502 10.5364 0 10.3109 0C10.0853 0 9.86194 0.044502 9.65355 0.130963C9.44517 0.217425 9.25584 0.344151 9.09639 0.503902L8.51999 1.08072Z"
        fill="#AAAAAA"
      />
    </svg>
  );
};

EditIcon.defaultProps = {
  fill: "#ccc",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: "",
};

export default EditIcon;
