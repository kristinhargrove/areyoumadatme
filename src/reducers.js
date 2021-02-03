import {
    INCREMENT,
    DECREMENT,
    FETCH_QUESTIONS
} from './actions';

export function counter(state, action) {
    switch(action.type) {
        case FETCH_QUESTIONS: 
            return {
                partnerQuestions: state.partnerQuestions
            }
        case INCREMENT: 
            return {
                count: state.count + 1
            }
        case DECREMENT: {
            return {
                count: state.count - 1
            }
        }
        default:
            return state;
    }
}