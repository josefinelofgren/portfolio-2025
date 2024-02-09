import React from "react";
import Heading from "../heading/heading";
import Button from "../button/button";
import Label from "../label/label";
import { useNavigate } from "react-router-dom";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  preamble: string;
  labels: string[];
  button: string;
  path: string;
}

const Card: React.FC<CardProps> = ({
  image,
  alt,
  title,
  preamble,
  labels,
  button,
  path,
}) => {
  let navigate = useNavigate();

  return (
    <article className={"card"}>
      <div className={"card-image"}>
        <img src={image} alt={alt} />
      </div>
      <div className={"card-content"}>
        {labels.map((item, index) => {
          return (
            <Label key={index} index={index} element="label" text={item} />
          );
        })}
        <div className={"card-text"}>
          <Heading element="h3" text={title} />
          <p>{preamble}</p>
        </div>
        <Button
          onClick={() => navigate(`/portfolio/${path}`)}
          element="button"
          variant="primary"
          text={button}
        />
      </div>
    </article>
  );
};

export default Card;
