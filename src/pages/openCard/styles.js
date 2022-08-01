import styled from "styled-components/macro";

export const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const OpenCardWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 10px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  width: 100%;
`;

export const AutorLink = styled.a`
  color: #2081e2;
  font-size: 16px;
  margin-right: 8px;
`;

export const Verified = styled.div`
  color: #2081e2;
  font-size: 16px;
  margin-right: 8px;
`;

export const VerifiedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const Owned = styled.div`
  font-size: 15px;
  color: rgb(138, 147, 155);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
`;

export const Ownername = styled.div`
  font-size: 15px;
  color: #2081e2;
  margin-left: 4px;
`;

export const Favorites = styled.div`
  font-size: 15px;
  color: rgb(138, 147, 155);
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;

export const FavIcon = styled.div`
  font-size: 24px;
  color: rgb(138, 147, 155);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const OfferContainer = styled.div`
  background-color: rgb(38, 43, 47);
  border-radius: 10px;
  border: 1px solid rgb(21, 27, 34);
  color: ${(props) => props.theme.fontsColor.secFont};
  background-color: ${(props) => props.theme.accordion.panelBackgroundColor};
  border: ${(props) => props.theme.card.border};
  margin-top: 30px;
`;

export const Flex = styled.div`
  padding: 20px 30px;
`;

export const BtnIcon = styled.div`
  font-size: 24px;
  margin-right: 16px;
  display: flex;
`;
