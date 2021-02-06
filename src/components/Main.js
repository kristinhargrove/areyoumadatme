import React from 'react';
import './Main.css';
import {
    Link
} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Main = (props) => (
    <>
    <Container maxWidth="lg">
        <Typography variant='body1' align="center">
            <Typography variant='h3'>
                ARE YOU...
            </Typography>
            <br />
            <Typography variant='h2'>
                mad at me?
            </Typography>
            <br />
                Are you mad at me is a fun and simple assessment to figure out if your significant other, friend or family are mad at you. 
                With COVID, we are spending A LOT of time with the people we care about, so it makes sense why someone might be mad at you.
                Simply send them the quiz and you will get the results sent back to you.
                <br /><br />
                If they are mad at you, we'll ask them to dinner or to hang out with you, on your behalf. 
                <br />
                DISCLAIMER: We won't be paying for dinner though, sorry.
            <br /><br />
            <Link to='/quiz'><Button variant="contained" size='large'>Start</Button></Link>
        </Typography>
    </Container>
    </>
);

export default Main;
