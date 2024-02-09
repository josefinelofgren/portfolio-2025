import React from "react";

interface UnderlineProps {
  text: string;
  src: string;
}

const Underline: React.FC<UnderlineProps> = ({ text, src }) => {
  return (
    <a className="underline" href={src}>
      {text}
    </a>
  );
};

export default Underline;
