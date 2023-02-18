import { createSlice } from '@reduxjs/toolkit';
import { quizDetails } from '../../assets/quiz';

const initialState = {
  score: 0,
  currentQuestion: 0,
}
const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addScore: (state) => {
      const highestPossibleScore = quizDetails.pointsPerQuestion * quizDetails.questions.length
      if (state.score < highestPossibleScore) {
        state.score += quizDetails.pointsPerQuestion;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestion <= quizDetails.questions.length -1) {
        state.currentQuestion += 1;
      }
    },
    setName: (state, action) => {
        state.user.name = action.payload
    },
    setEmail: (state, action) => {
        state.user.email = action.payload
    }, 
    setRecommendations: (state, action) => {
        state.recommendation = action.payload
    },
    resetState: (state) => {
      state.currentQuestion = 0;
      state.score = 0
    }
  },
});

export const { 
  addScore, 
  nextQuestion, 
  addAnswer, 
  setName, 
  setEmail,
  setRecommendations,
  resetState
} = quizSlice.actions;

export default quizSlice.reducer;