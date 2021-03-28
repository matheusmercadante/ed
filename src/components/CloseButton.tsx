import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";

interface Props {
  close: Number
}

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const CloseButton = ({ close }: Props) => (
  <button className="close">
    <strong>{close}</strong>
  </button>
  // <button onClick={close} className="close">
  //   <svg width="23" height="23" viewBox="0 0 23 23">
  //     <Path d="M 3 16.5 L 17 2.5" />
  //     <Path d="M 3 2.5 L 17 16.346" />
  //   </svg>
  // </button>
);
