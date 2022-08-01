import styled  from "styled-components/macro";
import { Link } from "react-router-dom";

export const GlobalSearchContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 500px;
  height: 100%;
  padding-top: 16px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props) => props.theme.fontsColor.primeFont};
  z-index: 9999;
  position: absolute;
  background-color: ${(props) =>
    props.theme.mySelect.drDownListBackgroundColor};
  width: 100%;
  margin: 2px;
  border-radius: 10px;
`;

export const ResultItem = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.mySelect.drDownListHoverBackgroundColor};
  }
`;

export const Logo = styled.img`
  margin-left: 16px;
  margin-right: 16px;
  height: 24px;
  border-radius: 9999px;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const Price = styled.div`
  margin-left: 8px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: #8a939b;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: ${(props) => props.theme.nftTable.border};
  &:hover {
    box-shadow: ${(props) => props.theme.nftTable.boxShadow};
  }
`;
