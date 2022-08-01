import styled from "styled-components/macro";

// 1. Help List
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  margin-top: 60px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

// 2. Help List Items

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #646072;
  border: ${(props) => props.theme.faq.faqBorder};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex: 1 0 340px;
  margin: 0px 15px 30px 15px;
  max-width: 100%;
  text-align: center;
  padding: 30px;
  &:hover {
    box-shadow: ${(props) => props.theme.faq.faqBoxshadow};
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.25px;
  margin-top: 10px;
  color: ${(props) => props.theme.fontsColor.thirdFont};
`;

export const NotFound = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 18px;
  color: white;
  margin-top: 40px;
`;
