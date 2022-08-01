import styled from "styled-components/macro";

export const SelectWrapper = styled.select`
  position: relative;
  min-width: 220px;
  padding: 16px;
  font-family: "Poppins", sans-serif;
  background-color: #202225;
  font-size: 14.5px;
  font-weight: 600;
  color: white;
  border: 1px solid rgb(21, 27, 34);
  border-radius: 10px;
  &:hover {
    background-color: #363840;
    cursor: pointer;
  }
`;

export const OptionsWrapper = styled.option`
  position: absolute;
  top: 40px;
  left: 3px;
  background-color: red;
  font-size: 20px;
`;

export const Label = styled.label`
  position: absolute;
  top: 40px;
  left: 3px;
  background-color: red;
  font-size: 20px;
`;

export const DropDownContainer = styled.div``;

export const DropDownHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding: 16px;
  font-family: "Poppins", sans-serif;
  background-color: #202225;
  background-color: ${(props) => props.theme.mySelect.headerBackgroundColor};
  font-size: 14.5px;
  font-weight: 600;
  color: white;
  color: ${(props) => props.theme.fontsColor.primeFont};
  border: 1px solid rgb(21, 27, 34);
  border: ${(props) => props.theme.mySelect.border};
  border-radius: 10px;
  &:hover {
    background-color: #363840;
    background-color: ${(props) =>
      props.theme.mySelect.headerHoverBackgroundColor};
    cursor: pointer;
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 9999;
  width: 240px;
  height: 300px;
  border-radius: 10px;
  overflow: auto;
  overflow-x: hidden;
  background-color: #4c505c;
  background-color: ${(props) =>
    props.theme.mySelect.drDownListBackgroundColor};

  font-size: 14.5px;
  font-weight: 600;
  border: ${(props) => props.theme.mySelect.border};
  box-sizing: border-box;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  padding: 16px;
  font-size: 14.5px;
  border-bottom: 1px solid rgb(21, 27, 34);
  border-bottom: ${(props) => props.theme.mySelect.border};
  font-weight: 600;
  &:hover {
    background-color: #363840;
    background-color: ${(props) =>
      props.theme.mySelect.drDownListHoverBackgroundColor};

    cursor: pointer;
  }
`;

export const Icon = styled.img`
  height: 24px;
  margin-right: 16px;
`;
export const ArrowIcon = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;
