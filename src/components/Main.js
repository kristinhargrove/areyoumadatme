import React from 'react';
import NameForm from './NameForm';

import './Main.css';
import {
    Link
} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Main extends React.Component { 
    render() {
        return (
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
                        Are you mad at me is a fun way to figure out if that person you think is mad at you is actually mad. 
                        <br />
                        Fill out your name, their name, and send them the link to the quiz.
                        <br /><br />
                        If they are mad at you, we'll ask them to dinner or to hang out with you, on your behalf. 
                        <br />
                        DISCLAIMER: We won't be paying for dinner though, sorry.
                    <br /><br />
                    <Link to='/quiz'><Button variant="contained" size='large'>Start</Button></Link>
                    <NameForm />
                </Typography>
            </Container>
    </>
            )
        }
    }

export default Main;
