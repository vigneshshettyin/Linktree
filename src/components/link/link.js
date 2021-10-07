import { Bounce } from "react-reveal";
import styled from "styled-components";
const myDemoList = [1, 2, 3, 4];
const Link = () => {
  return (
    <>
      <Bounce>
        <ParentWrapper>
          {myDemoList.map((item, index) => (
            <CustomDiv>
              <img
                src="https://github.com/vigneshshettyin.png"
                alt="my_profile_image"
              />
              <p className="text-center">This is a sample link text.</p>
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
  width: 70vw;
  display: flex;
  border: 1px solid black;
  height: 50px;
  :hover {
    background-color: aqua;
    color: white;
  }
  p {
    flex: 1;
  }
  img {
    :hover {
      transform: scale(4);
    }
    margin-left: 10px;
    max-width: 40px;
    max-height: 40px;
    border-radius: 8px;
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
