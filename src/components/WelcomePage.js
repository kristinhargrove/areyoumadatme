import React from 'react';
import { useParams } from "react-router";


const WelcomePage = () => {
    let { username, sender_name } = useParams();

    return (
        <div>
           HELLO {username}...
           <div>Your sexy friend {sender_name} wants you to take a quiz</div>
        </div>
    )
}

export default WelcomePage;