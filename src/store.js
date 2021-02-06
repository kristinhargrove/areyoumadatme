import { createStore } from 'redux';
import { counter } from './reducers';

const partnerQuestions = [
  'you are hangry',
  'you are sleepy',
  'I said your arms are "weirdly long"',
  'I was singing Celine Dion at the top of my lungs during your meeting',
  'I ate your leftovers',
  'I said the actor in Bridgerton is super hot',
  'you are being moody',
  'I beat you at ping pong that one time',
  'I refuse to do dishes',
  'I have been wearing your sweatshirt for the past two weeks'
]

//redux 

const defaultState = {
  count: 0,
  partnerQuestions,
  questionCount: 0
};

export const store = createStore(counter, defaultState);