// Import libraries
import React, { useState } from "react";

// Import components
import Header from "../components/header/header";
import Card from "../components/card/card";
import { Container, Row, Col } from "react-bootstrap";

// Import data
import { ProjectData } from "../data/project-data";
import { ProjectItem } from "../types/types";

function Home() {
  const [active, setActive] = useState<string>("view all");

  return (
    <div className="home">
      <Header />
      <div className="projects">
        <Container fluid>
          <Row>
            <div className="categories">
              <ul>
                <li
                  onClick={() => setActive("view all")}
                  className={active === "view all" ? "is-active" : ""}
                >
                  View all
                </li>
                <li>/</li>
                <li
                  onClick={() => setActive("front end")}
                  className={active === "front end" ? "is-active" : ""}
                >
                  Front End
                </li>
                <li>/</li>
                <li
                  onClick={() => setActive("ux")}
                  className={active === "ux" ? "is-active" : ""}
                >
                  UX / UI{" "}
                </li>
              </ul>
            </div>
            {ProjectData.map((item: ProjectItem, index: number) => {
              if (item.category.includes(active) || active === "view all") {
                return (
                  <Col md="6" key={index}>
                    <Card
                      title={item.title}
                      preamble={item.preamble}
                      button={item.button}
                      image={item.imgSrc}
                      alt={item.imgAlt}
                      labels={item.labels}
                      path={item.path}
                    />
                  </Col>
                );
              } else {
                return null;
              }
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
