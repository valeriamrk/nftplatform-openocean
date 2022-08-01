import styled, { css } from "styled-components/macro";

export const SearchBar = styled.div`
  display: flex;
  flex: 1 1 0%;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.searchBar.searchbarColor};
  border: ${(props) => props.theme.searchBar.border};
  border-radius: 0.8rem;
  &:hover {
    background-color: ${(props) => props.theme.searchBar.hoverColor};
  }
  ${(props) =>
    props.white &&
    css`
      height: 60px;
      width: 610px;
      background-color: white;
      color: black;
      border-radius: 5px;
      &:hover {
        background-color: white;
      }
    `};
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem;
  ${(props) =>
    props.white &&
    css`
      font-size: 24px;
      color: black;
    `};
`;
export const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem;
  cursor: pointer;
  ${(props) =>
    props.white &&
    css`
      font-size: 24px;
      color: black;
    `};
`;
