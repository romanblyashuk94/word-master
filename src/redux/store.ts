import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import wordsReducer from "./slices/wordsSlice";
import quizSlice from "./slices/quizSlice";

export const store = configureStore({
  reducer: {
    words: wordsReducer,
    quize: quizSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
