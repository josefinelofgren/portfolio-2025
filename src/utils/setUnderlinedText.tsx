import React, { ReactElement } from "react";
import Underline from "../components/underline/underline";

interface SetUnderlinedTextProps {
  text: string;
  underline: string;
  src: string;
}

const setUnderlinedText = ({
  text,
  underline,
  src,
}: SetUnderlinedTextProps): ReactElement => {
  const parts: (string | ReactElement)[] = text.split(
    new RegExp(`(${underline})`, "gi")
  );
  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" &&
        part.toLowerCase() === underline.toLowerCase() ? (
          <Underline text={part} key={index} src={src} />
        ) : (
          part
        )
      )}
    </>
  );
};

export { setUnderlinedText };
