import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  QuestionNumber: { value: 0 },
  QuestionBody: { value: "" },
  VariantsAnswers: {
    value: [""],
  },
  FailedQuestions: { value: <boolean[]>[] },
  RightAnswer: { value: "" },
};

export const AppSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    incrementQuestionNumber: (state) => {
      state.QuestionNumber.value += 1;
    },
    decrementQuestionNumber: (state) => {
      state.QuestionNumber.value -= 1;
    },

    setQuestionBody(state, action: PayloadAction<string>) {
      state.QuestionBody.value = action.payload;
    },

    setVariantsAnswers(state, action: PayloadAction<string[]>) {
      state.VariantsAnswers.value = action.payload;
    },

    addFailedQuestions(state, action: PayloadAction<boolean>) {
      state.FailedQuestions.value.push(action.payload);
    },

    setRightAnswer(state, action: PayloadAction<string>) {
      state.RightAnswer.value = action.payload;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  incrementQuestionNumber,
  decrementQuestionNumber,
  setQuestionBody,
  setVariantsAnswers,
  addFailedQuestions,
  setRightAnswer,
} = AppSlice.actions;
export const AppCounter = (state: RootState) => state.quiz_stats;
export default AppSlice.reducer;
