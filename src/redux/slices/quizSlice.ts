import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Question } from "../../types/Question";

export interface QuizState {
  quiz: Array<Question>;
  currentQuestionNumber: number;
  mistakes: Array<string>;
  isQuizDone: boolean;
}

const initialState: QuizState = {
  quiz: [],
  currentQuestionNumber: 1,
  mistakes: [],
  isQuizDone: false,
};

const quizeSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuiz: (state, action: PayloadAction<Question[]>) => {
      state.quiz = action.payload;
      state.currentQuestionNumber = 1;
      state.mistakes = [];
    },
    goToNextQuestion: (state) => {
      state.currentQuestionNumber += 1;
    },

    setIsQuizDone: (state, action: PayloadAction<boolean>) => {
      state.isQuizDone = action.payload;
    },

    addMistake: (state, action: PayloadAction<string>) => {
      state.mistakes.push(action.payload);
    },
  },
});

export const { setQuiz, goToNextQuestion, setIsQuizDone, addMistake } =
  quizeSlice.actions;

export default quizeSlice.reducer;
