import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/project/header";
import Intro from "../../components/project/intro";
import TextRow from "../../components/project/text-row";
import Challenge from "../../components/project/challenge";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../components/heading/heading";
import { setUnderlinedText } from "../../utils/setUnderlinedText";

function Calendar() {
  const { t } = useTranslation("translations", { keyPrefix: "calendar" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      <Header
        projectName={"calendar"}
        imgSrc={require("../../assets/images/calendar/calendar.png")}
      />
      <Container fluid>
        <Intro projectName={"calendar"} />
        <div className="challenge">
          <Challenge projectName={"calendar"} />
        </div>
        <TextRow projectName="calendar" text="design" title="Design" />
        <Row>
          <Col md="6">
            <figure>
              <img src={require("../../assets/images/calendar/sketch-1.png")} />
            </figure>
          </Col>
          <Col md="6">
            <figure>
              <img src={require("../../assets/images/calendar/sketch-2.png")} />
            </figure>
          </Col>
        </Row>
        <TextRow projectName="calendar" text="techStack" title="Tech stack" />
        <Row>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/calendar/final-ui-1.png")}
              />
            </figure>
          </Col>
          <Col md="6">
            <figure>
              <img
                src={require("../../assets/images/calendar/final-ui-2.png")}
              />
            </figure>
          </Col>
          <Col md="12">
            <figure>
              <img
                src={require("../../assets/images/calendar/final-ui-3.png")}
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
                  src: "https://josefinelofgren.github.io/react-calendar/app/calendar",
                })}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Calendar;
