import React from 'react';
import { useParams } from "react-router";


const WelcomePage = () => {
    let { username, senderName } = useParams();

    return (
        <div>
           HELLO {username}...
           <div>Your sexy friend {senderName} wants you to take a quiz</div>
        </div>
    )
}

export default WelcomePage;