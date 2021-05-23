import { createSlice } from "@reduxjs/toolkit";

type modalStateType = {
  open: boolean;
};

const initialState: modalStateType = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open ? (state.open = false) : (state.open = true);
    },
  },
});

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer;
