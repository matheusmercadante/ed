import * as React from "react";
import { Link } from 'react-router-dom'
import { motion, SVGMotionProps } from "framer-motion";

interface Props {
  next: string,
  prev: string
}

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#ba4154"
    strokeLinecap="round"
    {...props}
  />
);

export const NextButton = ({ next }: { next: string }) => (
  <Link to={next} className="next">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path d="M 3 16.5 L 17 2.5" />
      <Path d="M 3 2.5 L 17 16.346" />
    </svg>
  </Link>
);

export const PrevButton = ({ prev }: { prev: string }) => (
  <Link to={prev} className="next">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path d="M 3 16.5 L 17 2.5" />
      <Path d="M 3 2.5 L 17 16.346" />
    </svg>
  </Link>
);
