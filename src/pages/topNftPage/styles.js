import styled from "styled-components/macro";

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const TextContainer = styled.div`
  margin-top: 40px;
  font-size: 40px;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 1rem; /* 16px */
  color: white;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const DescriptionContainer = styled.p`
  line-height: 1;
  font-weight: 400;
  margin-bottom: 1rem; /* 16px */
  color: white;
  color: ${(props) => props.theme.fontsColor.thirdFont};
`;
