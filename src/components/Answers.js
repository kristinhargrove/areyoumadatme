import React from 'react';

const Answer = (props) => (
    <div className="answer-section">
        <form action='#'>
            <input type="radio" name="mad" value="true" />
                <label for="true">Yes</label>
            <input type="radio" name="mad" value="false" />
                <label for="false">No</label>
        </form>   
    </div>   

)
export default Answer;