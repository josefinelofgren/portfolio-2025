import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

interface SidebarProps {
  sidebar: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebar, toggleSidebar }) => {
  const { t } = useTranslation("translations", { keyPrefix: "navbar" });

  return (
    <div className={sidebar ? "sidebar is-active" : "sidebar"}>
      <Container fluid>
        <div className={sidebar ? "sidebar-wrap is-active" : "sidebar-wrap"}>
          {sidebar && (
            <div
              className={sidebar ? "sidebar-links is-active" : "sidebar-links"}
            >
              <Link onClick={toggleSidebar} to="/">
                <li>
                  <a>{t("work")}</a>
                </li>
              </Link>
              <Link onClick={toggleSidebar} to="/about">
                <li>
                  <a>{t("about")}</a>
                </li>
              </Link>
              <Link onClick={toggleSidebar} to="footer">
                <li>
                  <a>{t("contact")}</a>
                </li>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
