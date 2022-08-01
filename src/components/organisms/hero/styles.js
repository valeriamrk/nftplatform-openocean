import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const HeroWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  &:before {
    content: "";
    background-color: rgb(239 68 68);
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-image: url(https://lh3.googleusercontent.com/CZhnyKg0UM92CtKJVOoP_vHMu2r5-HHEELb3U-pMx_iU-kTuQ8CsO6B5AudpvNT0JvBCtrI_qbAnIPUXEYwUgwzKD4AZ_lRODw9Oaw=w600);
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    filter: blur(8px);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
export const TextContainer = styled.div`
  width: 50%;
`;
export const Title = styled.div`
  position: relative;
  color: ${(props) => props.theme.fontsColor.primeFont};
  font-size: 46px;
  font-weight: 600;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.fontsColor.secFont};
  max-width: 400px;
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  margin-top: 0.8rem;
  margin-bottom: 2.5rem;
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  box-shadow: ${(props) => props.theme.boxShadow};
  border-bottom-right-radius: 0.5rem; /* 8px */
  border-bottom-left-radius: 0.5rem; /* 8px */
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3rem;
`;

export const InfoContainer = styled.div`
  height: 5rem; /* 80px */
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 1rem; /* 16px */
  border-bottom-right-radius: 0.5rem; /* 8px */
  border-bottom-left-radius: 0.5rem; /* 8px */
  display: flex;
  align-items: center;
  color: white;
`;

export const MainImage = styled.img`
  height: 480px;
  border-top-right-radius: 0.5rem; /* 8px */
  border-top-left-radius: 0.5rem; /* 8px */
`;

export const Avatar = styled.img`
  height: 2.25rem;
  border-radius: 9999px;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem; /* 16px */
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const LinkSt = styled.div`
  color: rgb(32, 129, 226);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: #1868b7;
  }
`;

export const InfoIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1 1 0%;
  color: #8a939b;
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  font-weight: 700;
`;
