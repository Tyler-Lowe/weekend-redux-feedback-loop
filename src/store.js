import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const QuestionOneReducer = (state = 0, action) => {
    if (action.type === 'QUESTION_ONE') {
        return action.payload;
    }

    return state;
} 

const QuestionTwoReducer = (state = 0, action) => {
    if (action.type === 'QUESTION_TWO') {
        return action.payload;
    }

    return state;
} 

const QuestionThreeReducer = (state = 0, action) => {
    if (action.type === 'QUESTION_THREE') {
        return action.payload;
    }

    return state;
} 

const QuestionFourReducer = (state = 0, action) => {
    if (action.type === 'QUESTION_FOUR') {
        return action.payload;
    }

    return state;
} 


const store = createStore(
    combineReducers ({
        QuestionOneAnswer: QuestionOneReducer,
        QuestionTwoAnswer: QuestionTwoReducer,
        QuestionThreeAnswer: QuestionThreeReducer,
        QuestionFourAnswer: QuestionFourReducer,
    }),
    applyMiddleware(logger)
)

export default store;