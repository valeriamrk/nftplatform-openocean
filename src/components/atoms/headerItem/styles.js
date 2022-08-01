import styled from "styled-components/macro";

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 700;
  color: #c8cacd;
  color: ${(props) => props.theme.fontsColor.secFont};
  &:hover {
    color: white;
    color: ${(props) => props.theme.fontsColor.primeFont};
    cursor: pointer;
  }
  border-bottom: ${(props) =>
    props.selected ? "4px solid rgb(32, 129, 226)" : ""};
  border-radius: ${(props) => (props.selected ? "4px" : "")};
`;
