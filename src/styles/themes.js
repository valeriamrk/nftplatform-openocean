import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  header: {
    headerColor: "white",
    boxShadow: "1px 1px 8px 1px rgb(142 143 147)",
  },
  footerColor: "rgb(24, 104, 183)",
  fontsColor: {
    primeFont: "rgb(4, 17, 29)",
    secFont: "rgb(53, 56, 64)",
    thirdFont: "rgb(138, 147, 155)",
    fourthFont: "rgb(138, 147, 155)",
  },
  fontColor: "rgb(4, 17, 29)",
  primaryButton: {
    hoverColor: "rgb(24, 104, 183)",
  },
  secondaryButton: {
    buttonColor: "white",
    borderColor: "#2181e2",
    fontColor: "#2181e2",
    hoverColor: "white",
    boxShadow: "1px 1px 8px 1px rgb(142 143 147)",
  },
  iconButton: {
    buttonColor: "#2181e2",
    hoverColor: "#42a0ff",
  },
  backgroundColor: "rgb(255, 255, 255)",
  boxShadow: "1px 5px 5px rgb(142 143 147)",
  searchBar: {
    searchbarColor: "white",
    border: "1px solid rgb(229, 232, 235)",
    hoverColor: "",
    placeholderText: "rgb(4, 17, 29)",
  },
  card: {
    border: "1px solid rgb(229, 232, 235)",
    hover: "1px 2px 20px rgb(142 143 147)",
  },
  accordion: {
    titleBackgroundColor: "rgb(255, 255, 255)",
    panelBackgroundColor: "rgb(251, 253, 255)",
  },
  nftTable: {
    border: "1px solid rgb(229, 232, 235)",
    hoverBackgroundColor: "rgb(251, 253, 255)",
    boxShadow: "1px 1px 8px 1px rgb(229, 232, 235)",
  },
  mySelect: {
    headerBackgroundColor: "rgb(255, 255, 255)",
    headerHoverBackgroundColor: "rgb(251, 253, 255)",
    border: "1px solid rgb(229, 232, 235)",
    drDownListBackgroundColor: "rgb(255, 255, 255)",
    drDownListHoverBackgroundColor: "rgb(251, 253, 255)",
  },
  faq: {
    faqBorder: "1px solid rgb(229, 232, 235)",
    faqBoxshadow: "1px 1px 8px 1px rgb(229, 232, 235)",
  },
  sidebar: {
    backgroundColor: "rgb(255, 255, 255)",
    hoverBackgroundColor: "#363840",
  },
};

export const darkTheme = {
  body: "#000",
  header: {
    headerColor: "#04111d",
    boxShadow: "",
  },
  footerColor: "#04111d",
  fontsColor: {
    primeFont: "rgb(255, 255, 255)",
    secFont: "rgb(138, 147, 155)",
    thirdFont: "rgb(255, 255, 255)",
    fourthFont: "rgb(138,147,155)",
  },
  fontColor: "#fff",
  primaryButton: {
    hoverColor: "#42a0ff",
  },
  secondaryButton: {
    buttonColor: "#363840",
    borderColor: "rgb(21, 27, 34)",
    fontColor: "white",
    hoverColor: "#4c505c",
    boxShadow: "",
  },
  iconButton: {
    buttonColor: "#363840",
    hoverColor: "#4c505c",
  },
  backgroundColor: "#313338",
  boxShadow: "",
  searchBar: {
    border: "",
    searchbarColor: "#363840",
    hoverColor: "#4c505c",
    placeholderText: "#8a939b",
  },
  card: {
    border: "1px solid rgb(21, 27, 34)",
    hover: "",
  },
  accordion: {
    titleBackgroundColor: "rgb(38, 43, 47)",
    panelBackgroundColor: "rgb(48, 51, 57)",
  },
  nftTable: {
    border: "1px solid rgb(21, 27, 34)",
    hoverBackgroundColor: "#363840",
    boxShadow: "",
  },
  mySelect: {
    headerBackgroundColor: "#202225",
    headerHoverBackgroundColor: "#363840",
    border: "1px solid rgb(21, 27, 34)",
    drDownListBackgroundColor: "#4c505c",
    drDownListHoverBackgroundColor: "#363840",
  },
  faq: {
    faqBorder: "1px solid #646072",
    faqBoxshadow: "1px 1px 8px 1px #646072",
  },
  sidebar: {
    backgroundColor: "#202225",
    hoverBackgroundColor: "#363840",
  },
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
