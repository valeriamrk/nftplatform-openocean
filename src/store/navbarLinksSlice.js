import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbarLinks: [
    { id: 1, path: "/collections", label: "Collections" },
    { id: 2, path: "/stats", label: "Stats" },
    { id: 3, path: "/resources", label: "Resources" },
    { id: 4, path: "/create", label: "Create" },
  ],
};

export const navbarLinksSlice = createSlice({
  name: "navbarLinksData",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = navbarLinksSlice.actions;

export default navbarLinksSlice.reducer;
