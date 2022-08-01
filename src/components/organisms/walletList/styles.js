import styled, { css } from "styled-components/macro";

//1. Wallet List
export const ListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  ${(props) =>
    props.sidebar &&
    css`
      width: 90%;
    `};
`;

// 2. Wallet Item

export const ListItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
  color: ${(props) => props.theme.fontsColor.primeFont};
  width: 100%;
  font-weight: 600;
  border-bottom: ${(props) => props.theme.nftTable.border};
  border-right: ${(props) => props.theme.nftTable.border};
  border-left: ${(props) => props.theme.nftTable.border};
  padding: 16px 8px 16px 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.nftTable.hoverBackgroundColor};
    box-shadow: ${(props) => props.theme.nftTable.boxShadow};
  }
  &:first-child {
    border-top: ${(props) => props.theme.nftTable.border};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${(props) => props.theme.nftTable.border};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 125px;
  justify-content: flex-end;
`;

export const Logo = styled.img`
  margin-left: 16px;
  margin-right: 16px;
  height: 24px;
`;
