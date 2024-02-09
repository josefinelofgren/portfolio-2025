import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import Heading from "../heading/heading";

interface DesignProcessProps {
  projectName: string;
  imgSrc: string;
}

const DesignProcess: React.FC<DesignProcessProps> = ({
  projectName,
  imgSrc,
}) => {
  const { t } = useTranslation("translations", { keyPrefix: projectName });

  return (
    <div className="design-process">
      <Container fluid>
        <div className="design-process-container">
          <Heading
            element="h5"
            variant="project-subtitle"
            textColor={t("heading-color")}
            text={"Design process"}
          />
          <Heading element="h3" text={t("design-process")} />
          <figure>
            <img src={imgSrc} alt="Design Process" />
          </figure>
        </div>
      </Container>
    </div>
  );
};

export default DesignProcess;
