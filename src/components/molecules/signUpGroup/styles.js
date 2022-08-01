import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 40px;
  margin-right: 64px;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  line-height: 1.5;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const EmailInput = styled.div`
  display: flex;
  flex: 1 1 0%;
  margin-right: 0.8rem;
  width: max-content;
  align-items: center;
  background-color: ${(props) => props.theme.searchBar.searchbarColor};
  border-radius: 0.8rem;
  &:hover {
    background-color: ${(props) => props.theme.searchBar.hoverColor};
  }
`;
