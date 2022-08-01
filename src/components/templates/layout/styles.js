import styled from "styled-components/macro";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 72px;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.header.headerColor};
  box-shadow: ${(props) => props.theme.header.boxShadow};
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Footer = styled.div`
  background-color: ${(props) => props.theme.footerColor};
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
