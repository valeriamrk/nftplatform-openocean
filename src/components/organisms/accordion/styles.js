import styled, { css } from "styled-components/macro";

export const Title = styled.div`
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: rgb(38, 43, 47);
  border-top: 1px solid rgb(21, 27, 34);
  border-left: 1px solid rgb(21, 27, 34);
  border-right: 1px solid rgb(21, 27, 34);
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const AccWrapper = styled.div``;

export const Icon = styled.div`
  font-size: 20px;
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AccTitle = styled.div`
  width: 100%;
  color: ${(props) => props.theme.fontsColor.primeFont};

  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.theme.accordion.titleBackgroundColor};
  border: ${(props) => props.theme.card.border};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const LeftTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const AccPanel = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.fontsColor.secFont};
  background-color: ${(props) => props.theme.accordion.panelBackgroundColor};
  border: ${(props) => props.theme.card.border};
  display: none;
  ${(props) =>
    props.active &&
    css`
      transition: max-height 0.2s ease-out;
      display: flex;
    `};
  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

// 2. Single element accordeon

export const SingleAccWrapper = styled.div`
  border-radius: 10px;
  margin-top: 20px;
`;

export const SingleAccTitle = styled.div`
  width: 100%;
  color: ${(props) => props.theme.fontsColor.primeFont};
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.theme.accordion.titleBackgroundColor};
  border: ${(props) => props.theme.card.border};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

export const SingleAccPanel = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.fontsColor.secFont};
  background-color: ${(props) => props.theme.accordion.panelBackgroundColor};
  border: ${(props) => props.theme.card.border};
  display: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  ${(props) =>
    props.active &&
    css`
      display: flex;
    `}; ;
`;
