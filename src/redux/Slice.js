import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "list",
  initialState: {
    list: []
  },
  reducers: {
    newList: (state, { payload }) => {
      state.list = payload || [];
    },
  },
});

export const { reducer, actions } = counterSlice;
export const { newList } = actions;

export default reducer;
