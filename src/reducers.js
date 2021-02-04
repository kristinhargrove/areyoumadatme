import {
    INCREMENT,
    DECREMENT,
    INCREMENT_QUESTIONS
} from './actions';

export function counter(state, action) {
    switch(action.type) {
        case INCREMENT_QUESTIONS:
            return {
                ...state, questionCount: state.questionCount + 1
            }
        case INCREMENT: 
            return {
                ...state, count: state.count + 1
            }
        case DECREMENT: {
            return {
                ...state, count: state.count - 1
            }
        }
        default:
            return state;
    }
}