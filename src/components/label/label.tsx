import React from "react";

interface LabelProps {
  text: string;
  element: keyof JSX.IntrinsicElements;
  index: number;
  variant?: string;
}

const Label: React.FC<LabelProps> = ({
  text,
  element,
  index,
  variant,
  ...props
}) => {
  const Element = element;
  const classes = variant ? ` label--${variant}` : "";

  return (
    <Element key={index} className={`${"button"} ${classes}`} {...props}>
      {text}
    </Element>
  );
};

export default Label;
