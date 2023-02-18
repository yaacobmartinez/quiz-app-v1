import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { quizDetails } from '../assets/quiz'
import { addScore, nextQuestion } from '../store/reducers/quiz.reducer'
import ChoiceButton from './ChoiceButton'

function Question({currentIndex }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {questions} = quizDetails
    const question = questions[currentIndex]
    const handleAnswer = (choice) => {
        // check if answer is correct
        if (question.answer === choice) {
            // if correct add 1 score to state
            dispatch(addScore())
        }
        //check if quesiton is not the last question
        if (currentIndex < questions.length -1) {
            // add 1 to currentquestion index
            return dispatch(nextQuestion())
        }else{
            return navigate('/score')
        }
    }
    return (
        <div className="mx-auto max-w-xxl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <p className="mt-6 text-lg leading-8 text-teal-800">
                {currentIndex + 1}. <span aria-hidden="true">→</span> {question.question}
            </p>
            {
                question.choices.map((choice, index) => (
                    <ChoiceButton key={index} index={index} onClick={handleAnswer} choice={choice}/>
                ))
            }
        </div>
    )
}

export default Question