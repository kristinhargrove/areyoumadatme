import React from 'react';

import './Question.css';

const Question = (props) => {
    let currentQuestion = '';
    
    if (props.questionCount < props.partnerQuestions.length) {
        currentQuestion = props.partnerQuestions[props.questionCount]
    } else {
        alert('Quiz is over');
    }

    return (
    <>
        <h1>Are you mad at me because ....</h1>
        <div className='question-text' >
            {currentQuestion}?
        </div>
        <div className="answer-section">
            <button onClick={props.handleYesClick}>Yes</button>
            <button onClick={props.handleNoClick}>No</button>
            {/* <form>
                <input type="radio" name="mad" value="true" />
                    <label for="true">Yes</label>
                <input type="radio" name="mad" value="false" />
                    <label for="false">No</label><br />
                <input type="submit" value="submit" 
                    onClick={props.handleClick} /> 
            </form>    */}
        </div> 
    </>
    )
};

export default Question;