import { createSlice } from "@reduxjs/toolkit";

type countType = {
  // count: number;
  flexChild: number[];
};

const initialState: countType = {
  flexChild: [1, 2, 3],
};

const countSlice = createSlice({
  name: "hogeState",
  initialState,
  reducers: {
    addFlexChild: (state) => {
      const addNumber: number = state.flexChild.length + 1;
      state.flexChild = [...state.flexChild, addNumber];
    },
    removeFlexChild: (state) => {
      const newArray: number[] = [...state.flexChild];
      newArray.pop();
      state.flexChild = newArray;
    },
  },
});

export const { addFlexChild, removeFlexChild } = countSlice.actions;
export default countSlice.reducer;
