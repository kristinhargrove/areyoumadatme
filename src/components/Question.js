import React from 'react';
import {
    Link
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Question = (props) => {
    let currentQuestion = '';
    let showResults = '';
    let isQuizOver = props.questionCount === props.partnerQuestions.length;

    if (props.questionCount < props.partnerQuestions.length) {
        currentQuestion = <>{props.partnerQuestions[props.questionCount]}?</>
    } else {
       showResults = <Link to='/results'><Button variant='contained'>Submit Quiz</Button></Link>
    }
    
    return (
    <Container maxWidth='md' align='center'>
        <Typography variant='h4'>
            Are you mad at me because ...
        </Typography>
        <br />
        <Typography 
            variant='h6'
         >
            {!isQuizOver && currentQuestion }
        </Typography>
        <br />
        <div className="answer-section">
            {!isQuizOver && <Button 
            variant='contained' onClick={props.handleYesClick}>Yes</Button> }
            {!isQuizOver && <Button variant='contained' onClick={props.handleNoClick}>No</Button> }
            {isQuizOver && showResults }
        </div> 
    </Container>
    )
};

export default Question;