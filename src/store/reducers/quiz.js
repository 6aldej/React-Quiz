import { 
    FETCH_QUIZESS_ERROR, 
    FETCH_QUIZESS_START, 
    FETCH_QUIZESS_SUCCESS, 
    FETCH_QUIZ_SUCCESS, 
    FINISH_QUIZ, 
    QUIZ_NEXT_QUESTION, 
    QUIZ_RETRY, 
    QUIZ_SET_STATE 
} from "../actions/actionTypes"

const initialState = {
    quizes: [],
    loading: false,
    error: null,
    results: {}, // {[id]: 'success' 'error'}
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'}
    isFinished: false,
    quiz: null
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZESS_START:
            return {
                ...state, 
                loading: true
            }
        case FETCH_QUIZESS_SUCCESS:
            return {
                ...state, 
                loading:false,
                quizes: action.quizes
            }
        case FETCH_QUIZESS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state, 
                loading:false,
                quiz: action.quiz
            }
        case QUIZ_SET_STATE:
            return {
                ...state, 
                answerState: action.answerState,
                results: action.results
        }
        case FINISH_QUIZ:
            return {
                ...state,
                isFinished: true
        }
        case QUIZ_NEXT_QUESTION:
            return {
                ...state,
                answerState: null,
                activeQuestion: action.number
        }
        case QUIZ_RETRY:
            return {
                ...state,
                activeQuestion: 0,
                answerState: null,
                isFinished: false,
                results: {}
        }
        
        default:
            return state
    }
}