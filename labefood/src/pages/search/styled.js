import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ffff;
`;

export const SearchInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
    cursor: pointer;
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

export const Categorias = styled.ul`
  width: auto;
  max-width: 100vw;
  overflow: overlay;
  display: flex;
  align-items: center;
  height: 20px;
  padding: 20px 0;
  box-sizing: border-box;
  cursor: pointer;
  ::-webkit-scrollbar {
    display: none;
  }
  li{
    list-style-type: none;
    margin: 0 5px;
    font-size: 16px;
    :active{
        color: #e86e5a;
    }
  }
`