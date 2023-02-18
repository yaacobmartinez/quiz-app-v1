import React from 'react'
import { useSelector } from 'react-redux'
import { quizDetails } from '../assets/quiz'
import Container from '../components/Container'
import LinkButton from '../components/LinkButton'
import Recommendation from '../components/Recommendation'

function ScoreAndRecommendations() {
    const {score} = useSelector(state=> state.quiz)
    const {recommendations, courses} = quizDetails
    const getRecommendation = (recommendations, courses, score) => {
        let recommendation = [];
      
        for (let i = 0; i < recommendations.length; i++) {
          if (score < recommendations[i].score) {
            // Score is less than current recommendation, return previous recommendation
            recommendation = recommendations[i - 1].recommendation;
            break;
          }
          if (i === recommendations.length - 1) {
            // Score is higher than any recommendation, return last recommendation
            recommendation = recommendations[i].recommendation;
          }
        }
      
        const recommendedCourses = courses.filter((course) =>
            recommendation.includes(course.name)
        );

        return recommendedCourses;
    }
    const recommendation = getRecommendation(recommendations, courses, score)
    return (
        <Container>
            <div className="mx-auto max-w-xxl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <p className="mt-6 text-lg leading-8 text-teal-800">
                    Yay! You got a score of {score}.
                </p>
                <h2 className="text-2xl font-bold text-gray-900">Recommendations</h2>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                    {recommendation.map((course, index) => (
                        <Recommendation course={course} key={index} />
                    ))}
                </div>
                <LinkButton to="/">
                    <span aria-hidden="true">←</span> Take the exam again 
                </LinkButton>
            </div>
        </Container>
    )
}
export default ScoreAndRecommendations