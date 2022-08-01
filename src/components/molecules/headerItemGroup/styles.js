import styled from "styled-components/macro";

export const HeaderItemGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  color: ${(props) => props.theme.fontsColor.fourthFont};

  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 900;
  padding-left: 1.5rem;
  &:hover {
    color: ${(props) => props.theme.fontsColor.primeFont};
    cursor: pointer;
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  color: ${(props) => props.theme.fontsColor.fourthFont};

  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 900;
  padding-left: 1.5rem;
`;
