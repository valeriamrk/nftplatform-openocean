import styled from "styled-components/macro";

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;

export const LogoText = styled.div`
  margin-left: 0.8rem;
  color: ${(props) => props.theme.fontsColor.primeFont};

  font-weight: 600;
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
`;
