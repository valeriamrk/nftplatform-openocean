import styled from "styled-components/macro";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;

export const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 180px;
  font-weight: 700;
  color: rgb(229, 232, 235);
`;

export const ClockImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const PageLost = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(112, 122, 131);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 30px;
`;
