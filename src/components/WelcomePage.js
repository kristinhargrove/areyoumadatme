import React from 'react';
import { useParams } from "react-router-dom";
import {
    Link
} from 'react-router-dom';

import './WelcomePage.css';

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

const WelcomePage = () => {
    const classes = useStyles();

    let { username, sendername } = useParams();

    return (
        <Container maxWidth='md' align='center'>
           <Typography variant='h4'>
                Hey {username},
                <br />
            </Typography>
            <br />
            <Typography variant="body1">
                 your friend, {sendername}, thinks you might be mad at them, so they are sending you this quiz. 
                <br /> 
                Are you? 
                <br /><br />
                Take this quiz and find out!
            </Typography>
            <br />
        <div className={classes.root}>
            <Link to='/quiz'><Button variant="outlined" size="large" align="center">Start Partner Quiz</Button></Link>
            <Link to='/friendQuiz'><Button variant="outlined" size="large" align="center">Start Friend Quiz</Button></Link>
        </div>
        </Container>
    )
}

export default WelcomePage;