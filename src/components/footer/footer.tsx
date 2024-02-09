import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";
import { setUnderlinedText } from "../../utils/setUnderlinedText";
import Heading from "../heading/heading";

interface ContactDetails {
  icon: JSX.Element;
  text: string;
  src: string;
}

const Footer: React.FC = () => {
  const { t } = useTranslation("translations", { keyPrefix: "footer" });

  const contactDetails: ContactDetails[] = [
    {
      icon: <FaIcons.FaLinkedinIn />,
      text: "LinkedIn",
      src: "https://www.linkedin.com/in/josefinelofgren/",
    },
    {
      icon: <MdIcons.MdPhoneIphone />,
      text: "+46 76 79 88 105",
      src: "tel:+46767988105",
    },
  ];

  return (
    <div id="footer" className="footer">
      <Container fluid>
        <Row>
          <div className="footer-container">
            <div className="footer-content">
              <Heading
                element="h1"
                variant="bold"
                text={setUnderlinedText({
                  text: t("title"),
                  underline: t("underline"),
                  src: "mailto:josefine.lofgren@live.se",
                })}
              />
              {contactDetails.map((item, index) => (
                <a
                  key={index}
                  className="contact-info"
                  target="_blank"
                  href={item.src}
                  rel="noreferrer"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
