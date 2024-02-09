import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Navbar as Nav } from "react-bootstrap";

interface NavbarProps {
  sidebar: boolean;
  toggleSidebar: () => void;
  windowDimensions: { width: number };
}

const Navbar: React.FC<NavbarProps> = ({
  sidebar,
  toggleSidebar,
  windowDimensions,
}) => {
  const { t } = useTranslation("translations", { keyPrefix: "navbar" });

  return (
    <Nav>
      <Container fluid>
        <Nav.Brand>
          <Link to="/"></Link>
        </Nav.Brand>
        {windowDimensions.width < 768 ? (
          <Link
            to="#"
            className={sidebar ? `sidebar-btn is-active` : `sidebar-btn`}
            onClick={toggleSidebar}
          >
            <div
              className={
                sidebar ? `sidebar-burger is-active` : `sidebar-burger`
              }
            />
          </Link>
        ) : (
          <div className="nav-links">
            <Link to="/">{t("work")}</Link>
            <Link to="/about">{t("about")}</Link>
            <Link to="footer">{t("contact")}</Link>
          </div>
        )}
      </Container>
    </Nav>
  );
};

export default Navbar;
