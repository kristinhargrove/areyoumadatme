import React from 'react';
import './Question.css'

const partnerQuestions = [
    {
        questionText: 'you are hangry'
    },
    {
        questionText: 'you are sleepy'
    },
    {
        questionText: 'I said your arms are "weirdly long"'
    },
    {
        questionText: 'I was signing Celine Dion at the top of my lungs during your meeting'
    },
    {
        questionText: 'I ate your leftovers'
    },
    {
        questionText: 'I said the actor in Bridgerton is super hot'
    },
    {
        questionText: 'you are being moody'
    },
    {
        questionText: 'I beat you at ping pong that one time'
    },
    {
        questionText: 'I refuse to do dishes'
    },
    {
        questionText: 'I have been wearing your sweatshirt for the past two weeks'
    }
]

const Question = (props) => (
    <div className='question-text'>
        {partnerQuestions[0].questionText}
    </div>
);

export default Question;