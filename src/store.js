import { createStore } from 'redux';
import { counter } from './reducers';

//redux 

const defaultState = {
  count: 0
};

export const store = createStore(counter, defaultState);