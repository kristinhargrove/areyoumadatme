export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREMENT_QUESTIONS = "increment_questions"

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

export function actionIncrementQuestions() {
    return {
        type: INCREMENT_QUESTIONS
    }
}
