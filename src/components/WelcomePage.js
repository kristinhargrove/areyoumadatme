import React from 'react';
import { useParams } from "react-router";


const WelcomePage = () => {
    let { username, sendername } = useParams();

    return (
        <div>
           HELLO {username}...
           <div>Your sexy friend {sendername} wants you to take a quiz</div>
        </div>
    )
}

export default WelcomePage;