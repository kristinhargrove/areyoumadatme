import React from 'react';

const ResultsPage = props => {
    let results = '';
    console.log(props.amount);

    if (props.amount < 5) {
        results =
            <div>
                <p>
                    A message from your SO: <br />
                    You are not mad. Go give your SO a hug!
                </p>
            </div>
    } else if (props.amount > 5) {
        results =
            <div> 
                <p>
                    A message from your SO:<br />
                    You not really mad, you're probably just a little annoyed. Go buy a latte and calm down.
                </p>
            </div>
    } else {
        results = 
            <div>
                <p>
                    A message from your SO:<br />
                    WOW, you are mad. Sorry I made you mad. Do you want to go get margs with me?
                </p>
            </div>
    }

    return (
        <div className = 'results'>
            {results}
        </div>
    )
}

export default ResultsPage;
