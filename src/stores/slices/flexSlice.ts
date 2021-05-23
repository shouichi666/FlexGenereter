import { createSlice } from "@reduxjs/toolkit";

type flexStateType = {
  display: string | any;
  flexDirection: string;
  justifyContent: string;
  alignItems: string | any;
  flexWrap: string;
  alignContent: string;
};

const initialState: flexStateType = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "wrap",
  alignContent: "flex-start",
};

const flexSlice = createSlice({
  name: "flexState",
  initialState,
  reducers: {
    updataDisplay: (state, action) => {
      state.display = action.payload;
    },
    updataFlexDirection: (state, action) => {
      state.flexDirection = action.payload;
    },
    updataJustifyContent: (state, action) => {
      state.justifyContent = action.payload;
    },
    updataAlignItems: (state, action) => {
      state.alignItems = action.payload;
    },
    updataFlexWrap: (state, action) => {
      state.flexWrap = action.payload;
    },
    updataAlignContent: (state, action) => {
      state.alignContent = action.payload;
    },
  },
});

export const {
  updataDisplay,
  updataFlexDirection,
  updataJustifyContent,
  updataAlignItems,
  updataFlexWrap,
  updataAlignContent,
} = flexSlice.actions;
export default flexSlice.reducer;
