import { FC, ReactElement } from "react";

interface ButtonProps {
  text: string;
  element: keyof JSX.IntrinsicElements;
  variant?: string;
  onClick: any;
}

const Button: FC<ButtonProps> = ({
  text,
  element,
  variant,
  ...props
}): ReactElement => {
  const Element = element;
  const classes = variant ? ` button--${variant}` : "";

  return (
    <Element className={`${"button"} ${classes}`} {...props}>
      {text}
    </Element>
  );
};

export default Button;
