import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../heading/heading";

interface HeaderProps {
  projectName: string;
  imgSrc: string;
}

const Header: React.FC<HeaderProps> = ({ projectName, imgSrc }) => {
  const { t } = useTranslation("translations", { keyPrefix: projectName });

  return (
    <header className="project-header" style={{ backgroundColor: t("color") }}>
      <Container fluid>
        <Row>
          <Col md="6">
            <div className="header-container">
              <div className="header-content">
                <Heading element="h1" text={t("title")} />
                <Heading element="h4" text={t("preamble")} />
              </div>
            </div>
          </Col>
          <Col md="6">
            <figure>
              <img src={imgSrc} alt="Project" />
            </figure>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
