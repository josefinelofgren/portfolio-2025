// import libaries
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

//import components
import Header from "../../components/project/header";
import Intro from "../../components/project/intro";
import TextRow from "../../components/project/text-row";
import Challenge from "../../components/project/challenge";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../components/heading/heading";

// import data

function DogFriendly() {
  const { t } = useTranslation("translations", { keyPrefix: "dogFriendly" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      <Header
        projectName={"dogFriendly"}
        imgSrc={require("../../assets/images/dogfriendly/dogfriendly.png")}
      />
      <Container fluid>
        <Intro projectName={"dogFriendly"} />
        <div className="challenge">
          <Challenge projectName={"dogFriendly"} />
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
                  <Heading
                    element="p"
                    text={t("researchInsight2Description")}
                  />
                </Col>
                <Col md="8">
                  <Heading
                    element="h6"
                    variant={"bold"}
                    text={t("researchInsight3Title")}
                  />
                  <Heading
                    element="p"
                    text={t("researchInsight3Description")}
                  />
                </Col>
                <Col md="4"></Col>
              </Row>
            </Container>
          </div>
        </div>
        <TextRow
          projectName="dogFriendly"
          text="competitiveAnalysisDescription"
          title="Competitive analysis"
        />
        <figure
          style={{
            width: "100%",
            height: "auto",
            padding: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "70%", margin: "0 auto" }}
            src={require("../../assets/images/dogfriendly/competitive-analysis.png")}
          />
        </figure>
        <TextRow
          projectName="dogFriendly"
          text="personaDescription"
          title="Personas"
        />
        <figure
          style={{
            width: "100%",
            height: "auto",
            padding: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "80%", margin: "0 auto" }}
            src={require("../../assets/images/dogfriendly/personas.png")}
          />
        </figure>
        <TextRow
          projectName="dogFriendly"
          text="initialDesignIdeasDescription"
          title="Initial design ideas"
        />
        <figure
          style={{
            width: "100%",
            height: "auto",
            padding: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "80%", margin: "0 auto" }}
            src={require("../../assets/images/dogfriendly/user-flow.png")}
          />
        </figure>
        <Container fluid>
          <Heading element="h6" variant="bold" text={"Point #1: Login"} />
          <Heading element="p" text={t("initialDesignIdeasPoint1")} />
          <Heading
            element="h6"
            variant="bold"
            text={"Point #2: Explore page"}
          />
          <Heading element="p" text={t("initialDesignIdeasPoint2")} />
          <Heading element="h6" variant="bold" text={"Point #3: Favorite"} />
          <Heading element="p" text={t("initialDesignIdeasPoint3")} />
        </Container>
        <TextRow
          projectName="dogFriendly"
          text="midFidelityDescription"
          title="Prototyping"
        />
        <Row>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/dogfriendly/low-fid-1.png")}
              />
            </figure>
          </Col>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/dogfriendly/low-fid-2.png")}
              />
            </figure>
          </Col>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/dogfriendly/low-fid-3.png")}
              />
            </figure>
          </Col>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/dogfriendly/low-fid-4.png")}
              />
            </figure>
          </Col>
        </Row>
        <TextRow
          projectName="dogFriendly"
          text="usabilityTestingDescription"
          title="User testing"
        />
        <Row>
          <Col md="4">
            <figure>
              <img src={require("../../assets/images/dogfriendly/opt-1.png")} />
            </figure>
            <Heading element="p" text="First option" />
          </Col>
          <Col md="4">
            <figure>
              <img src={require("../../assets/images/dogfriendly/opt-2.png")} />
            </figure>
            <Heading element="p" text="Second option" />
          </Col>
          <Col md="4">
            <figure>
              <img src={require("../../assets/images/dogfriendly/opt-3.png")} />
            </figure>
            <Heading element="p" text="Final UI" />
          </Col>
        </Row>
        <Container fluid>
          <Heading element="h2" variant="project-subtitle" text={"Final UI"} />
        </Container>
        <figure className="prototype">
          <img src={require("../../assets/images/dogfriendly/final-ui.png")} />
        </figure>
        <TextRow
          projectName="dogFriendly"
          text="learningsDescription"
          title="Learnings"
        />
      </Container>
    </div>
  );
}

export default DogFriendly;
