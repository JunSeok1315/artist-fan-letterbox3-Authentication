import { createSlice } from "@reduxjs/toolkit";
import fakeData from "fakeData.json";

const lettersSlice = createSlice({
  name: "letters",
  initialState: fakeData,
  reducers: {
    addLetter: (state, action) => {
      state.unshift(action.payload);
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
    editLetter: (state, action) => {
      const { id, editingText } = action.payload;
      const letter = state.find((letter) => letter.id === id);
      if (letter) {
        letter.content = editingText;
      }
    },
  },
});

export const { addLetter, deleteLetter, editLetter } = lettersSlice.actions;
export default lettersSlice.reducer;
