import React, { useState } from 'react';

import './Question.css';

const Question = (props) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);

        if (nextQuestion < props.partnerQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you are at the end');
        }
    }
    return (
    <>
        <h1>Are you mad at me because ....</h1>
        <div className='question-text'>
            {props.partnerQuestions[currentQuestion].questionText}?
        </div>
        <div className="answer-section">
            <form action='#'>
                <input type="radio" name="mad" value="true" />
                    <label for="true">Yes</label>
                <input type="radio" name="mad" value="false" />
                    <label for="false">No</label><br />
                <input type="submit" value="submit" onClick={() => handleAnswerButtonClick()}/> //get rid of this
            </form>   
        </div> 
    </>
    )
};

export default Question;