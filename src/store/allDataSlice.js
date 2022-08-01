import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarIsOpened: false,
  selectCategoriesItems: [
    {
      id: 1,
      label: "All Categories",
      icon: "https://opensea.io/static/images/icons/allnfts-light.svg",
    },
    {
      id: 2,
      label: "Art",
      icon: "https://opensea.io/static/images/icons/art-light.svg",
    },
    {
      id: 3,
      label: "Collectibles",
      icon: "https://opensea.io/static/images/icons/collectibles-light.svg",
    },
    {
      id: 4,
      label: "Domain Names",
      icon: "https://opensea.io/static/images/icons/domain-names-light.svg",
    },
    {
      id: 5,
      label: "Music",
      icon: "https://opensea.io/static/images/icons/music-light.svg",
    },
    {
      id: 6,
      label: "Photography",
      icon: "https://opensea.io/static/images/icons/photography-category-light.svg",
    },
    {
      id: 7,
      label: "Trading cards",
      icon: "https://opensea.io/static/images/icons/trading-cards-light.svg",
    },
    {
      id: 8,
      label: "Utility",
      icon: "https://opensea.io/static/images/icons/utility-light.svg",
    },
    {
      id: 9,
      label: "Virtual Worlds",
      icon: "https://opensea.io/static/images/icons/virtual-worlds-light.svg",
    },
  ],
  accordionItems: [
    { id: 1, opened: false, label: "Properties" },
    { id: 2, opened: false, label: "Stats" },
    { id: 3, opened: false, label: "About Crypto Coven" },
    { id: 4, opened: false, label: "Details" },
  ],
  defaultTheme: "light",
};

export const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    changeSidebarStatus: (state, action) => {
      state.sidebarIsOpened = !state.sidebarIsOpened;
    },
    changeSidebarStatusClose: (state) => {
      state.sidebarIsOpened = false;
    },
    changeAccordionStatus: (state, action) => {
      state.accordionItems.map((element) => {
        if (element.id === action.payload.id) {
          element.opened = !element.opened;
        }
        return element;
      });
    },
    defaultThemeToggler: (state, action) => {
      state.defaultTheme === "light"
        ? (state.defaultTheme = "dark")
        : (state.defaultTheme = "light");
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeSidebarStatus,
  changeSidebarStatusClose,
  changeAccordionStatus,
  defaultThemeToggler,
} = allDataSlice.actions;

export default allDataSlice.reducer;
