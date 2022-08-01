import styled from "styled-components/macro";

export const OptionsWrapper = styled.div`
  width: 500px;
  margin: 20px;
`;

export const Title = styled.div`
  width: 100%;
  color: ${(props) => props.theme.fontsColor.primeFont};
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.theme.accordion.titleBackgroundColor};
  border: ${(props) => props.theme.card.border};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const Icon = styled.div`
  font-size: 20px;
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextContainer = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.accordion.panelBackgroundColor};
  border: ${(props) => props.theme.card.border};
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.fontsColor.primeFont};
  line-height: 1.5;
`;

export const CreatedBy = styled.div`
  font-size: 15px;
  line-height: 1.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
  color: ${(props) => props.theme.fontsColor.thirdFont};
`;

export const Verified = styled.div`
  color: #2081e2;
  font-size: 16px;
  margin-right: 8px;
  display: flex;
`;

export const AutorLink = styled.a`
  color: #2081e2;
  font-size: 15px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const AccTitle = styled.div`
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: rgb(38, 43, 47);
  border-top: 1px solid rgb(21, 27, 34);
  border-left: 1px solid rgb(21, 27, 34);
  border-right: 1px solid rgb(21, 27, 34);
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
`;

export const AccPanel = styled.div`
  padding: 20px;
  background-color: rgb(48, 51, 57);
  border: 1px solid rgb(21, 27, 34);
`;
