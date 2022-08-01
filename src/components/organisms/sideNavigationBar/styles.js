import styled, { css } from "styled-components/macro";

export const SideNav = styled.div`
  height: calc((100% - 0px) - 72px);
  width: 0;
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  color: white;
  color: ${(props) => props.theme.fontsColor.primeFont};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
  transform: translate3d(0px, 0px, 0px);
  ${(props) =>
    props.sidebarActive &&
    css`
      width: 100%;
    `};
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.sidebar.backgroundColor};
  width: 420px;
  height: 100%;
  overflow-x: hidden;
`;

export const NavHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: ${(props) => props.theme.card.border};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 900;
  margin-right: 8px;
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 300px;
  line-height: 1.5;
  font-weight: 400;
  background-color: rgb(112, 122, 131);
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -270px;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  font-weight: 700;
  color: #2181e2;
  &:hover {
    cursor: pointer;
    color: rgb(24, 104, 183);
    ${TooltipText} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Description = styled.div`
  font-size: 16px;
  padding: 20px 20px 0px 20px;
  line-height: 1.5;
  color: rgb(138, 147, 155);
`;

export const WalletContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
