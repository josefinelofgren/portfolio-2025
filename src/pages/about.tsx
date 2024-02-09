import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import Heading from "../components/heading/heading";
import { Container, Row, Col } from "react-bootstrap";
import { experience } from "../data/experience";
import { education } from "../data/education";

interface AboutProps {
  windowDimensions: { width: number; height: number };
}

const About: React.FC<AboutProps> = ({ windowDimensions }) => {
  const { t } = useTranslation("translations", { keyPrefix: "about" });

  // Scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="about">
        <div className="about-container">
          <Container fluid>
            <Row>
              <Col md="6">
                <div className="about-description">
                  <Heading
                    element="h6"
                    variant="secondary"
                    text={t("preamble")}
                  />
                  <Heading
                    element="h3"
                    variant="about-title"
                    text={t("title")}
                  />
                  <Heading
                    element="p"
                    variant="about-description"
                    text={t("descriptionPart1")}
                  />
                  <Heading
                    element="p"
                    variant="about-description"
                    text={t("descriptionPart2")}
                  />
                  <Heading
                    element="p"
                    variant="about-description"
                    text={t("descriptionPart3")}
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="about-figure">
                  <figure className="about-image">
                    <img
                      src={require("../assets/images/josefine.png")}
                      alt="Josefine Löfgren Portrait"
                    />
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="skills">
        <Container fluid>
          <Row>
            <Col md="6">
              <Heading
                element="h5"
                variant="about-subtitle"
                text={"Education"}
              />
              {education.map((item, index) => (
                <div className="education-item" key={index}>
                  <Heading element="h6" text={item.title} />
                  <Heading
                    element="p"
                    variant="about-school"
                    text={`${item.school}, ${item.date}`}
                  />
                </div>
              ))}
              <div
                className={windowDimensions.width < 768 ? "border-bottom" : ""}
              />
            </Col>
            <Col md="6">
              <Heading
                element="h5"
                variant="about-subtitle"
                text={"Experience"}
              />
              {experience.map((item, index) => (
                <div className="experience-item" key={index}>
                  <Heading element="h6" text={item.title} />
                  <Heading
                    element="p"
                    variant="about-company"
                    text={`${item.company}, ${item.date}`}
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
