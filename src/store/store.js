import {configureStore} from '@reduxjs/toolkit'
import quizReducer from './reducers/quiz.reducer'
export default configureStore({
    reducer: {
        quiz: quizReducer
    }
})