import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { Flip, Rotate } from "react-reveal";
import { socialLinks } from "../../data/data";
const Footer = () => {
  return (
    <>
      <div className="bottom">
        <hr />
        <Rotate bottom>
          <FooterContainer>
            {socialLinks.map((link) => {
              return (
                <FooterContent>
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

const SocialIconStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "white",
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
