import { useState } from 'react';
import questions from '../data/questions';

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState({})
    const userAnswered = (qIndex, aIndex) => {
        const currentAnswers = { ...userAnswers }
        currentAnswers[qIndex] = aIndex
        setUserAnswers(currentAnswers)
    }
    const getResult = () => {
        const markPerQuestion = 100 / questions.length
        let score = 0
        const answeredQuestions = Object.keys(userAnswers)
        answeredQuestions.forEach((qIndex, i) => {
            if (questions[qIndex].answers[userAnswers[qIndex]].isCorrect) {
                score = score + markPerQuestion
            }
        })
        window.alert(Math.round(score))
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-8 offset-md-2'>
                    {
                        questions.map((q, i) => {
                            return (
                                <div key={i}>
                                    <h3>{q.question}</h3>
                                    {
                                        q.answers.map((a, j) => {
                                            return (
                                                <p key={j}>
                                                    <input type='radio' name={`answer-${i}`} onClick={() => {
                                                        userAnswered(i, j)
                                                    }} /> {a.answer}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='row my-5'>
                <div className='col-12 col-md-8 offset-md-2'>
                    <input type='button' value='Get My Result' className='btn btn-primary' onClick={getResult} />
                </div>
            </div>
        </div>
    )
}

export default Quiz