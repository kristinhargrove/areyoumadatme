export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const FETCH_QUESTIONS = "fetch_questions";

export function actionIncrement() {
    return {
        type: INCREMENT
    };
}

export function actionDecrement() {
    return {
        type: DECREMENT
    };
}

export function fetchQuestions() {
    return {
        type: FETCH_QUESTIONS
    }
}
