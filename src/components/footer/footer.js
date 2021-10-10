import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { Flip, Rotate } from "react-reveal";
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
        <Rotate bottom>
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
        </Rotate>
        <Flip bottom>
          <Copyright
            props={a.darkMode ? themeData.light : themeData.dark}
            onClick={() => {
              window.open(
                "https://github.com/vigneshshettyin/Linktree",
                "_blank"
              );
            }}
            className="text-center"
          >
            Inspired From Linktree
          </Copyright>
        </Flip>
      </div>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  margin: 5px;
  :hover {
    transform: scale(1.1);
  }
`;

const Copyright = styled.p`
  font-family: "Pacifico", cursive !important;
  color: ${(props) => props.props.footerColor};
  :hover {
    transform: scale(1.1);
    text-shadow: 5px 5px 5px #000;
  }
`;
