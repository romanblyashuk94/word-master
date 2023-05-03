import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Word } from "../../types/Word";

export interface WordsState {
  vocabulary: Array<Word>;
}

const getInitialVocabulary = () => {
  const localStorageVocabulary = localStorage.getItem("vocabulary");

  return localStorageVocabulary
    ? JSON.parse(localStorage.getItem("vocabulary"))
    : [];
};

const initialState: WordsState = {
  vocabulary: getInitialVocabulary() as Array<Word>,
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Word>) => {
      state.vocabulary.unshift(action.payload);

      localStorage.setItem("vocabulary", JSON.stringify(state.vocabulary));
    },

    removeWord: (state, action: PayloadAction<string>) => {
      state.vocabulary = state.vocabulary.filter(
        (word) => word.id !== action.payload
      );

      localStorage.setItem("vocabulary", JSON.stringify(state.vocabulary));
    },
  },
});

export const { addWord, removeWord } = wordsSlice.actions;

export default wordsSlice.reducer;
