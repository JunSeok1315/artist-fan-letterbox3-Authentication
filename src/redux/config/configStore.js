import { configureStore } from "@reduxjs/toolkit";
import lettersReducer from "../modules/letters";
import memberReducer from "../modules/member";

const store = configureStore({
  reducer: {
    letters: lettersReducer,
    member: memberReducer,
  },
});

export default store;
