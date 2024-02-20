import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: "카리나",
  reducers: {
    setMember: (state, action) => action.payload,
  },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
