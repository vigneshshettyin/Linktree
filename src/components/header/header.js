import styled from "styled-components";
import { Zoom } from "react-reveal";

const Header = () => {
  return (
    <>
      <Zoom>
        <HeaderWrapper>
          <CustomImage src="https://github.com/vigneshshettyin.png" />
          <UserNameText>@vigneshshettyin</UserNameText>
        </HeaderWrapper>
      </Zoom>
    </>
  );
};
export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 5px;
  :hover {
    margin-top: 50px;
    transform: scale(2);
  }
`;

const UserNameText = styled.h6``;
