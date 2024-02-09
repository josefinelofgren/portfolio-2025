import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../heading/heading";

interface TextRowProps {
  projectName: string;
  title: string;
  text: string;
}

const TextRow: React.FC<TextRowProps> = ({ projectName, title, text }) => {
  const { t } = useTranslation("translations", { keyPrefix: projectName });

  return (
    <Container fluid>
      <Row>
        <Col md="4">
          <Heading element="h3" variant="project-subtitle" text={title} />
        </Col>
        <Col md="8">
          <Heading element="p" text={t(text)} />
        </Col>
      </Row>
    </Container>
  );
};

export default TextRow;
