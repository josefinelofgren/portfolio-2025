import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/project/header";
import Intro from "../../components/project/intro";
import TextRow from "../../components/project/text-row";
import Challenge from "../../components/project/challenge";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../components/heading/heading";
import { setUnderlinedText } from "../../utils/setUnderlinedText";

function HundSokerHem() {
  const { t } = useTranslation("translations", { keyPrefix: "hundSokerHem" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      <Header
        projectName={"hundSokerHem"}
        imgSrc={require("../../assets/images/hund-soker-hem/hund-soker-hem.png")}
      />
      <Container fluid>
        <Intro projectName={"hundSokerHem"} />
        <div className="challenge">
          <Challenge projectName={"hundSokerHem"} />
        </div>
        <TextRow
          projectName="hundSokerHem"
          text="techStack"
          title="Tech Stack"
        />
        <Container fluid>
          <Row>
            <Col md="4">
              <figure>
                <img
                  src={require("../../assets/images/hund-soker-hem/screen-1.png")}
                  alt="Screenshot 1"
                />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img
                  src={require("../../assets/images/hund-soker-hem/screen-3.png")}
                  alt="Screenshot 3"
                />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img
                  src={require("../../assets/images/hund-soker-hem/screen-2.png")}
                  alt="Screenshot 2"
                />
              </figure>
            </Col>
          </Row>
        </Container>
        <TextRow projectName="hundSokerHem" text="goal" title="Goal" />
        <Row>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/hund-soker-hem/selected-dog-1.png")}
                alt="Selected Dog 1"
              />
            </figure>
          </Col>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/hund-soker-hem/selected-dog-2.png")}
                alt="Selected Dog 2"
              />
            </figure>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/hund-soker-hem/selected-dog-3.png")}
                alt="Selected Dog 3"
              />
            </figure>
          </Col>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/hund-soker-hem/selected-dog-4.png")}
                alt="Selected Dog 4"
              />
            </figure>
          </Col>
        </Row>
        <Container fluid>
          <Row>
            <Col md="4">
              <Heading
                element="h3"
                variant="project-subtitle"
                text="Final product"
              />
            </Col>
            <Col md="8">
              <Heading
                element="p"
                text={setUnderlinedText({
                  text: t("finalProduct"),
                  underline: t("underline"),
                  src: "https://github.com/josefinelofgren/hund-soker-hem",
                })}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default HundSokerHem;
