import React from 'react';
import './Question.css';

import {
    Link
} from 'react-router-dom';


const Question = (props) => {
    let currentQuestion = '';
    let showResults = '';
    let isQuizOver = props.questionCount === props.partnerQuestions.length;

    if (props.questionCount < props.partnerQuestions.length) {
        currentQuestion = <>{props.partnerQuestions[props.questionCount]}?</>
    } else {
       showResults = <Link to='/results'><button>Submit Quiz</button></Link>
    }
    
    return (
    <>
        <h1>Are you mad at me because ....</h1>
        <div className='question-text' >
            {!isQuizOver && currentQuestion }
        </div>
        <div className="answer-section">
            {!isQuizOver && <button onClick={props.handleYesClick}>Yes</button> }
            {!isQuizOver && <button onClick={props.handleNoClick}>No</button> }
            {isQuizOver && showResults }
        </div> 
    </>
    )
};

export default Question;