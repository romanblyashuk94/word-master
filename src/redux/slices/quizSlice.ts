import { Result } from "../../types/Result";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Question } from "../../types/Question";

const getPreviousResults = () => {
  const localStorageResults = localStorage.getItem("results");

  return localStorageResults ? JSON.parse(localStorage.getItem("results")) : [];
};

export interface QuizState {
  previousResults: Array<Result>;
  quiz: Array<Question>;
  currentQuestionNumber: number;
  mistakes: Array<string>;
  isQuizDone: boolean;
}

const initialState: QuizState = {
  previousResults: getPreviousResults(),
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

    addResult: (state, action: PayloadAction<Result>) => {
      state.previousResults.unshift(action.payload);

      localStorage.setItem("results", JSON.stringify(state.previousResults));
    },
  },
});

export const {
  setQuiz,
  goToNextQuestion,
  setIsQuizDone,
  addMistake,
  addResult,
} = quizeSlice.actions;

export default quizeSlice.reducer;
