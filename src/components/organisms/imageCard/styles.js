import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: rgb(48, 51, 57);
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  border: ${(props) => props.theme.card.border};
  margin-left: 20px;
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #8a939b;
  padding: 0px 8px 0px 8px;
`;

export const MainImage = styled.img`
  border-bottom-right-radius: 0.5rem; /* 8px */
  border-bottom-left-radius: 0.5rem; /* 8px */
`;
