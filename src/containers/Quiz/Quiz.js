import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Loader from '../../components/UI/Loader/Loader'
import { connect } from 'react-redux'
import { 
    fetchQuizById, 
    quizAnswerClcik, 
    retryQuiz 
} from '../../store/actions/quiz'

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.retryQuiz()
    }

    render() {
        return (
           <div className={classes.Quiz}>
               <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.props.loading || !this.props.quiz
                        ? <Loader />
                        : this.props.isFinished
                            ?   <FinishedQuiz 
                                    results={this.props.results}
                                    quiz={this.props.quiz}
                                    onRetry={this.props.retryQuiz}
                                />
                            :   <ActiveQuiz 
                                    answers={this.props.quiz[this.props.activeQuestion].answers}
                                    question={this.props.quiz[this.props.activeQuestion].question}
                                    onAnswerClick={this.props.quizAnswerClcik}
                                    quizLength={this.props.quiz.length}
                                    answerNumber={this.props.activeQuestion + 1}
                                    state={this.props.answerState}
                                />
                    }
               </div>
           </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results, // {[id]: 'success' 'error'}
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState, // {[id]: 'success' 'error'}        isFinished: false,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading,
        isFinished: state.quiz.isFinished
    }
}

function mapDispatchToProps(dispatch) {
    return{
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClcik: answerId => dispatch(quizAnswerClcik(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
