import React from 'react';
import Output from '../containers/OutputContainer';

const ResultsPage = props => (
    <div>
        <h3>
            You scored 
            <Output  />.
        </h3>
        <p>
            You are pretty mad.
        </p>
    </div>
)

export default ResultsPage;
