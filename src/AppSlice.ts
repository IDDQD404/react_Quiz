import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";

const initialState = {
  QuestionNumber: { value: 1 },
  QuestionBody: { value: "How to write an IF statemente in JS?" },
  VariantsAnswers: {
    value: ["if i == 5 then", "if(i==5)", "if i = 5", "if i = 5 then"],
  },
  FailedQuestions: { value: [true, false] },
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

    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { incrementQuestionNumber, decrementQuestionNumber } =
  AppSlice.actions;
export const AppCounter = (state: RootState) => state.quiz_stats;
export default AppSlice.reducer;
