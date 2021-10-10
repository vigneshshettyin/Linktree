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
                src={item.image}
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
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 50vw;
  padding: 5px;
  background-color: ${(props) => props.props.cardBackgroundColor};
  display: flex;
  border: 2px solid white;
  height: max-content;
  p {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    width: 90vw;
    text-align: center;
  }
  :hover {
    background-color: ${(props) => props.props.onHoverBackgroundColor};
    color: ${(props) => props.props.onHoverTextColor};
  }
  p {
    flex: 1;
  }
  #image {
    background-color: white;
    :hover {
      transform: scale(2);
    }
    margin-left: 10px;
    max-width: 60px;
    max-height: 60px;
    border-radius: 2px;
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
