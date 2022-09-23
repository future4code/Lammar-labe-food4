import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ffff;
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background-color: #ffff;
  padding: 0 16px;
  justify-content: flex-start;
  border-bottom: 1px solid #b8b8b8;
  img {
    width: 24px;
    height: 24px;
  }
  p {
    font-size: 16px;
    line-height: 19px;
    color: #000;
  }
`;

export const SearchInput = styled.input`
  width: 328px;
  height: 56px;
  margin: 8px 0;
  border: 1px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 0 16px;
`;

export const SearchInputText = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #000;
`;

export const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ffff;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: 188px;
  border: 1px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 8px 0;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 16px;
  }
`;

export const CardImage = styled.img`
  width: 328px;
  height: 120px;
  border-radius: 8px 8px 0 0;
`;

export const CardTitle = styled.p`
  font-size: 16px;
  color: red;
  margin: 8px 0;
  margin-right: 168px;
`;

export const CardText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #b8b8b8;
  margin: 0 0 8px 10px;
`;

export const CardPrice = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #000;
  margin: 0 10px 8px 0px;
`;
