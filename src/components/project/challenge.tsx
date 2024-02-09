import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../heading/heading";

interface ChallengeProps {
  projectName: string;
}

const Challenge: React.FC<ChallengeProps> = ({ projectName }) => {
  const { t } = useTranslation("translations", { keyPrefix: projectName });

  return (
    <Container fluid style={{ backgroundColor: t("color") }}>
      <Row>
        <Col md="4">
          <Heading
            element="h3"
            variant="project-subtitle"
            text={"The challenge"}
          />
        </Col>
        <Col md="8">
          <div className="challenge-container">
            <Heading element="h4" variant="quote" text={t("challenge")} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Challenge;
