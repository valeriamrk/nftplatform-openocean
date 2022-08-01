import styled, { css } from "styled-components/macro";

export const MyButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: none;
  position: relative;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  font-weight: 600;
  width: 160px;
  padding: 12px 20px 12px 20px;
  background-color: #2181e2;
  border-radius: 0.5rem; /* 8px */
  margin-right: 1.25rem; /* 20px */
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.primaryButton.hoverColor};
    cursor: pointer;
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: ${(props) => props.theme.secondaryButton.buttonColor};
      color: ${(props) => props.theme.secondaryButton.fontColor};
      border: 1px solid;
      border-color: ${(props) => props.theme.secondaryButton.borderColor};
      &:hover {
        background-color: ${(props) => props.theme.secondaryButton.hoverColor};
        box-shadow: ${(props) => props.theme.secondaryButton.boxShadow};
        cursor: pointer;
      }
    `};
  ${(props) =>
    props.small &&
    css`
      width: 100px;
      padding: 8px 16px 8px 16px;
      font-size: 16px;
      &:hover {
        background-color: #42a0ff;
        cursor: pointer;
      }
    `};
  ${(props) =>
    props.big &&
    css`
      width: 300px;
      background-color: #363840;
      color: #e4e8ea;
      background-color: ${(props) => props.theme.secondaryButton.buttonColor};
      color: ${(props) => props.theme.secondaryButton.fontColor};

      border: 1px solid;
      border-color: ${(props) => props.theme.secondaryButton.borderColor};

      &:hover {
        background-color: ${(props) => props.theme.secondaryButton.hoverColor};
        box-shadow: ${(props) => props.theme.secondaryButton.boxShadow};

        cursor: pointer;
      }
    `};
  ${(props) =>
    props.icon &&
    css`
      height: max-content;
      width: max-content;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding: 16px 16px;
      font-size: 16px;
      background-color: ${(props) => props.theme.iconButton.buttonColor};
      color: rgb(255, 255, 255);
      margin-right: 12px;
      margin-bottom: 12px;
      &:hover {
        background-color: ${(props) => props.theme.iconButton.hoverColor};
        cursor: pointer;
      }
    `};
`;
