import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const ResultsPage = props => {
    let results = '';

    if (props.amount < 5) {
        results =
        <>
            You don't seem very mad. Let's hang out!
        </>
    } else if (props.amount > 5) {
        results =
            <>
                Wow, you are really mad at me. Sorry I made you mad. Will you go get dinner with me?
            </>
    } else {
        results = 
            <>
                Take the quiz again, we're not sure.
            </>
    }

    return (
        <Container maxWidth='md' align='center'>
            <Typography variant='h4'>
                A message from your significant other:
            </Typography>
        <br />
            <Typography variant = 'h6'>
                {results}   
            </Typography>
        </Container>
    )
}

export default ResultsPage;
