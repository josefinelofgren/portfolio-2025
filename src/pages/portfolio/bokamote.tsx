import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/project/header";
import Intro from "../../components/project/intro";
import TextRow from "../../components/project/text-row";
import Challenge from "../../components/project/challenge";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../components/heading/heading";

function BokaMote() {
  const { t } = useTranslation("translations", {
    keyPrefix: "bokaMote",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      <Header
        projectName={"bokaMote"}
        imgSrc={require("../../assets/images/boka-mote/bokamote.png")}
      />
      <Container fluid>
        <Intro projectName={"bokaMote"} />
        <div className="challenge">
          <Challenge projectName={"bokaMote"} />
        </div>
        <div className="empathize">
          <div className="empathize-container">
            <Container fluid>
              <Heading
                element="h3"
                variant="project-subtitle"
                text={"Research"}
              />
              <Heading
                element="p"
                text={t("researchDescription")}
                variant="margin-bottom"
              />
              <Row>
                <Col md="8">
                  <Heading
                    element="h6"
                    variant={"bold"}
                    text={t("researchInsight1Title")}
                  />
                  <figure
                    style={{
                      width: "100%",
                      height: "auto",
                      padding: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "80%", margin: "0 auto" }}
                      src={require("../../assets/images/boka-mote/stores.png")}
                    />
                  </figure>
                  <Heading
                    element="p"
                    text={t("researchInsight1Description")}
                  />
                </Col>
                <Col md="4"></Col>
                <Col md="4"></Col>
                <Col md="8">
                  <Heading
                    element="h6"
                    variant={"bold"}
                    text={t("researchInsight2Title")}
                  />
                  <figure
                    style={{
                      width: "100%",
                      height: "auto",
                      padding: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "80%", margin: "0 auto" }}
                      src={require("../../assets/images/boka-mote/designers.png")}
                    />
                  </figure>
                  <Heading
                    element="p"
                    text={t("researchInsight2Description")}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <TextRow projectName="bokaMote" text={"techStack"} title="Tech stack" />
        <Container fluid>
          <Row>
            <Col md="12">
              <Heading
                element="h2"
                variant="project-subtitle"
                text={"Final UI"}
              />
            </Col>
            <Col md="12">
              <figure>
                <img
                  src={require("../../assets/images/boka-mote/boka-mote-prototyp-2.png")}
                />
              </figure>
            </Col>
          </Row>
        </Container>
        <TextRow projectName="bokaMote" text="outcome" title="Outcome" />
      </Container>
    </div>
  );
}

export default BokaMote;
