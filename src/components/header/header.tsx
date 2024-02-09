import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../heading/heading";

const Header: React.FC = () => {
  return (
    <Container fluid>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <Heading element="h1" text={"Hello"} variant="bold" />
            <Heading element="h1" text={"I'm Josefine"} variant="bold" />
            <h5 className="heading--secondary">
              <span style={{ fontWeight: "600" }}>Front End developer</span>{" "}
              with broad knowledge in{" "}
              <span style={{ fontWeight: "600" }}>User Experience</span>, driven
              by passion for the{" "}
              <span style={{ fontWeight: "600" }}>digital world</span> and{" "}
              <span style={{ fontWeight: "600" }}>compassion for people.</span>
            </h5>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
