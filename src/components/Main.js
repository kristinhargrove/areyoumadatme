import React from 'react';
import './Main.css'

import {
    Link
} from 'react-router-dom';

const Main = (props) => (
    <>
        <body className="main">
            <h1 className="title">ARE YOU MAD AT ME?</h1>
            <p>
                "Are you mad at me is a fun and simple assessment to figure out if your SO, friend or family are mad at you. 
                We are spending A LOT of time with the people we care about, so it makes sense why someone might be mad at you.
                Simply send them the quiz and you will get the results sent back to you.
            </p>
            <p>
                If they are mad at you, we'll ask them to dinner or to hang out with you, on your behalf. We won't be paying for dinner though, sorry.
            </p>
            <Link to='/quiz'><button className="start">Start</button></Link>
        </body>
    </>
);

export default Main;
