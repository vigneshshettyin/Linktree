import { useContext } from "react";
import styled from "styled-components";
import { Zoom } from "react-reveal";
import { profileData, themeData } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DarkModeToggle from "react-dark-mode-toggle";
import themeContext from "../../state/context/themeContext";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  const a = useContext(themeContext);
  const { userName, photoLink } = profileData;
  if (!a.darkMode) {
    document.body.style.backgroundColor = themeData.dark.backgroundColor;
  } else {
    document.body.style.backgroundColor = themeData.light.backgroundColor;
  }

  return (
    <>
      <DarkMode onChange={a.setDarkMode} checked={a.darkMode} size={50} />
      <Zoom>
        <HeaderWrapper>
          <CustomImage effect="blur" src={photoLink} />
          <UserNameText props={a.darkMode ? themeData.light : themeData.dark}>
            @{userName}
          </UserNameText>
        </HeaderWrapper>
      </Zoom>
    </>
  );
};
export default Header;

const DarkMode = styled(DarkModeToggle)`
  margin: 15px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomImage = styled(LazyLoadImage)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 5px;
`;

const UserNameText = styled.h6`
  color: ${(props) => props.props.headerFontColor};
  font-weight: bold;
`;
