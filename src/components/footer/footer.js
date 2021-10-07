import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { Flip, Rotate } from "react-reveal";

const Footer = () => {
  return (
    <>
      <div className="bottom">
        <Rotate bottom>
          <FooterContainer>
            <FooterContent>
              <SocialIcon
                style={SocialIconStyle}
                url="https://www.linkedin.com"
              />
            </FooterContent>
            <FooterContent>
              <SocialIcon
                style={SocialIconStyle}
                url="https://www.instagram.com"
              />
            </FooterContent>
            <FooterContent>
              <SocialIcon
                style={SocialIconStyle}
                url="https://www.github.com"
              />
            </FooterContent>
          </FooterContainer>
        </Rotate>
        <Flip bottom>
          <Copyright className="text-center">Inspired From Linktree</Copyright>
        </Flip>
      </div>
    </>
  );
};

export default Footer;

const SocialIconStyle = {
  width: "30px",
  height: "30px",
};

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
  :hover {
    transform: scale(1.1);
    text-shadow: 5px 5px 5px #000;
  }
`;
