import React from "react";

interface HeadingProps {
  text: any;
  element: keyof JSX.IntrinsicElements;
  size?: string;
  variant?: string;
  align?: string;
  textColor?: string;
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  element,
  children,
  size,
  variant,
  align,
  textColor,
  ...props
}) => {
  const Element = element;
  const classes =
    (variant ? `heading--${variant}` : "") + (align ? `heading--${align}` : "");

  return (
    <Element
      style={{ color: `${textColor}` }}
      className={`${"heading"} ${classes} `}
      {...props}
    >
      {text}
      {children}
    </Element>
  );
};

export default Heading;
