import React from 'react'
import classes from './Header.css'
import logo from '../../decoration/img/logo.svg'
import github from '../../decoration/img/github.svg'

const Header = props => {

    return (
        <div className={classes.Header}>
            <div className={classes.head}>
                <p>React Quiz</p>
                <img className={classes.logo} src={logo} alt="LogoApp" />
                <a href="https://github.com/6aldej/React-Quiz">
                    <img className={classes.github} src={github} alt="GitHub"/> 
                </a>
            </div>
            
            
        </div>
    )
}
export default Header