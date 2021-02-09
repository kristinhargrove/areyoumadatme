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
  'I have been wearing your sweatshirt for the past two weeks',
  'I said McDonalds is not "real food"'
]

const friendQuestions = [
  'you are hangry',
  'you are sleepy',
  'I ate your food',
  'I drank your liquor',
  'I do all my zoom meetings in the common area',
  'I said your new pants were "reminded me of my grandma',
  'I still have that one shirt of yours',
  'I wore shoes in the house after you specifically asked me not to',
  'I said you looked like a ghost',
  'you are on your period',
]

//redux 

const defaultState = {
  count: 0,
  partnerQuestions,
  friendQuestions,
  questionCount: 0,
};

export const store = createStore(counter, defaultState);