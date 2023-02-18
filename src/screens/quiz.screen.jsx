import React from 'react'
import Container from "../components/Container"
import Question from "../components/Question"
import { useSelector } from 'react-redux'

function Quiz() {
    const {currentQuestion} = useSelector((state) => state.quiz)
    return (
        <Container>
            <Question currentIndex={currentQuestion} />
        </Container>
    )
}

export default Quiz