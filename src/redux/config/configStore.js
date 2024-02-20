import { configureStore } from "@reduxjs/toolkit";
import lettersReducer from "../modules/letters";
import memberReducer from "../modules/member";
import authReducer from "../modules/authSlice";

const store = configureStore({
  reducer: {
    letters: lettersReducer,
    member: memberReducer,
    auth: authReducer,
  },
});

export default store;
