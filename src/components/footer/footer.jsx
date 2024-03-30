import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { socialLinks, themeData } from "../../data/data";
import themeContext from "../../state/context/themeContext";
import { useContext } from "react";
const Footer = () => {
  const a = useContext(themeContext);

  const footerSocialLinkColor = () => {
    if (a.darkMode) return themeData.dark.footerSocialLinkColor;
    else return themeData.light.footerSocialLinkColor;
  };

  const SocialIconStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: footerSocialLinkColor(),
  };

  return (
    <>
      <div className="bottom">
        <hr />
        <FooterContainer>
          {socialLinks.map((link, index) => {
            return (
              <FooterContent key={index}>
                <SocialIcon
                  className="shadow"
                  style={SocialIconStyle}
                  url={link}
                />
              </FooterContent>
            );
          })}
        </FooterContainer>
      </div>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  margin: 5px;
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;
