import React from 'react';
import {
    Link
} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const FriendQuestions = (props) => {
    const classes = useStyles();

    let currentQuestion = '';
    let showResults = '';
    let isQuizOver = props.questionCount === props.friendQuestions.length;

    if (props.questionCount < props.friendQuestions.length) {
        currentQuestion = <>{props.friendQuestions[props.questionCount]}?</>
    } else {
       showResults = <Link to='/results'><Button variant='outlined'>See Results</Button></Link>
    }
    
    return (
    <Container maxWidth='md' align='center'>
            {!isQuizOver && <><Typography variant='h4'>Are you mad at me because ...</Typography><br /><Typography variant='h6'> {currentQuestion}</Typography></>}
        <br />
        <div className={classes.root}>
            {!isQuizOver && <Button 
            variant='outlined' size='large' onClick={props.handleYesClick}>Yes</Button> }
            {!isQuizOver && <Button variant='outlined' size='large' onClick={props.handleNoClick}>No</Button> }
            {isQuizOver && showResults }
        </div>
    </Container>
    )
};

export default FriendQuestions;