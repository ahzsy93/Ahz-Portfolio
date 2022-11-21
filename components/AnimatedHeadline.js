import React from "react";
import { RoughNotation } from "react-rough-notation";

const AnimatedHeadline = ({ color, children }) => {
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={false}
      padding={[0, 2]}
      iterations={2}
      
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

export default AnimatedHeadline;
