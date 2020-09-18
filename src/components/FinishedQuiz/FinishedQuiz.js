import React from 'react'
import classes from './FinishedQuiz.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total ++
        }
        return total
    }, 0)

    return (
        <div className = {classes.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizitem, index)=> {
                    const cls = [
                        'fa',
                        props.results[quizitem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizitem.id]]
                    ]

                    return (
                        <li key={index}>
                            <strong>{index+1}</strong>.&nbsp;
                            {quizitem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to={'/'}>
                    <Button type="success">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz