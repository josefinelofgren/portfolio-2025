import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../heading/heading";

interface IntroProps {
  projectName: string;
}

const Intro: React.FC<IntroProps> = ({ projectName }) => {
  const { t } = useTranslation("translations", { keyPrefix: projectName });

  return (
    <Container fluid>
      <div className="intro">
        <div className="intro-container">
          <Row>
            <Col md="7">
              <Heading
                element="h3"
                variant="project-subtitle"
                text={"Overview"}
              />
              <Heading element="p" variant="secondary" text={t("overview")} />
            </Col>
            <Col md="1"></Col>
            <Col md="2">
              <Heading element="h6" variant="project-subtitle" text={"Roles"} />
              <Heading element="p" variant="secondary" text={t("roles")} />
              <Heading
                element="h6"
                variant="project-subtitle"
                text={"Timeline"}
              />
              <Heading element="p" variant="secondary" text={t("timeline")} />
            </Col>
            <Col md="2">
              <Heading element="h6" variant="project-subtitle" text={"Tools"} />
              <Heading element="p" variant="secondary" text={t("tools")} />
              <Heading
                element="h6"
                variant="project-subtitle"
                text={"Client"}
              />
              <Heading element="p" variant="secondary" text={t("client")} />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
