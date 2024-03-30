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
              id="divHoverExpand"
              className="shadow"
              props={a.darkMode ? themeData.light : themeData.dark}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
              key={index}
            >
              <LazyLoadImage
                id="image"
                draggable={false}
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
  font-weight: 400;
  margin-bottom: 15px;
  border-radius: 15px;
  cursor: pointer;
  align-items: baseline;
  justify-content: center;
  width: 30vw;
  padding: 5px;
  background-color: ${(props) => props.props.cardBackgroundColor};
  display: flex;
  color: ${(props) => props.props.CardtextColor};
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 90vw;
    text-align: center;
  }
  p {
    flex: 1;
    justify-content: space-between;
  }
  #image {
    margin-left: 10px;
    width: auto;
    height: 50px;
    width: auto;
    :hover {
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
    }
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
