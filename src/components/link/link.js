import { Bounce } from "react-reveal";
import styled from "styled-components";
import { linkData, themeData } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import themeContext from "../../state/context/themeContext";
import "react-lazy-load-image-component/src/effects/blur.css";
const Link = () => {
  const a = useContext(themeContext);

  return (
    <>
      <Bounce>
        <ParentWrapper>
          {linkData.map((item, index) => (
            <CustomDiv
              className="shadow"
              props={a.darkMode ? themeData.light : themeData.dark}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
              key={index}
            >
              <LazyLoadImage
                id="image"
                effect="blur"
                src={`https://ui-avatars.com/api/?rounded=true&name=${item.name}&background=random`}
                alt="my_profile_image"
              />
              <p className="text-center">{item.name}</p>
            </CustomDiv>
          ))}
        </ParentWrapper>
      </Bounce>
    </>
  );
};

export default Link;

const CustomDiv = styled.div`
  margin-bottom: 15px;
  border-radius: 15px;
  cursor: pointer;
  align-content: center;
  align-items: baseline;
  justify-content: center;
  width: 40vw;
  padding: 5px;
  background-color: ${(props) => props.props.cardBackgroundColor};
  display: flex;
  height: max-content;
  color: ${(props) => props.props.CardtextColor};
  @media (max-width: 768px) {
    width: 90vw;
    text-align: center;
  }
  :hover {
    background-color: ${(props) => props.props.onHoverBackgroundColor};
    color: ${(props) => props.props.onHoverTextColor};
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  p {
    flex: 1;
  }
  #image {
    margin-left: 10px;
    width: 50px;
    height: 50px;
  }
`;

const ParentWrapper = styled.div`
  margin-top: 20px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
