import React, { useState } from 'react';

import './Question.css';

const partnerQuestions = [
    {
        questionText: 'you are hangry'
    },
    {
        questionText: 'you are sleepy'
    },
    {
        questionText: 'I said your arms are "weirdly long"'
    },
    {
        questionText: 'I was signing Celine Dion at the top of my lungs during your meeting'
    },
    {
        questionText: 'I ate your leftovers'
    },
    {
        questionText: 'I said the actor in Bridgerton is super hot'
    },
    {
        questionText: 'you are being moody'
    },
    {
        questionText: 'I beat you at ping pong that one time'
    },
    {
        questionText: 'I refuse to do dishes'
    },
    {
        questionText: 'I have been wearing your sweatshirt for the past two weeks'
    }
]

const Question = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);

        if (nextQuestion < partnerQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you are at the end');
        }
    }
    return (
    <>
        <h1>Are you mad at me because ....</h1>
        <div className='question-text'>
            {partnerQuestions[currentQuestion].questionText}?
        </div>
        <div className="answer-section">
            <form action='#'>
                <input type="radio" name="mad" value="true" />
                    <label for="true">Yes</label>
                <input type="radio" name="mad" value="false" />
                    <label for="false">No</label><br />
                <input type="submit" value="submit" onClick={() => handleAnswerButtonClick()}/>
            </form>   
        </div> 
    </>
    )
};

export default Question;