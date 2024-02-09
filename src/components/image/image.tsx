import React from "react";

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  click?: () => void;
  pattern?: string;
  bgColor?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  width,
  height,
  alt,
  click,
  pattern,
  bgColor,
  ...props
}) => {
  const classes = pattern ? ` image--${pattern}` : "";

  return (
    <div className={`${"image"} ${classes}`} {...props}>
      {pattern && <img src={pattern} alt={alt} className={"image__pattern"} />}
      <picture>
        <source
          media="(min-width: 640px)"
          width={width}
          height={height}
          srcSet={src}
        />
        <img
          className={"image__object"}
          src={src}
          alt={alt}
          onClick={click}
          loading="lazy"
          decoding="async"
          style={{ backgroundColor: bgColor }}
        />
      </picture>
    </div>
  );
};

export default Image;
