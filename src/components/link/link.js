import { Bounce } from "react-reveal";
import styled from "styled-components";
import { linkData, themeData } from "../../data/data";
const Link = () => {
  return (
    <>
      <Bounce>
        <ParentWrapper>
          {linkData.map((item, index) => (
            <CustomDiv
              className="shadow"
              props={themeData}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
              key={index}
            >
              <img src={item.image} alt="my_profile_image" />
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
  width: 50vw;
  padding: 5px;
  background-color: white;
  display: flex;
  border: 2px solid white;
  height: max-content;
  p {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
  :hover {
    background-color: ${(props) => props.props.backgroundColor};
    color: ${(props) => props.props.linkHoverTextColor};
  }
  p {
    flex: 1;
  }
  img {
    background-color: white;
    :hover {
      transform: scale(4);
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
