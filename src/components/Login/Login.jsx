import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { LogIn } from '../../redux/auth.reducer';
import { maxLengthCreator, required } from '../../Utils/validator/validator';
import { createField, Input } from '../coummon/Prilouder/formControls/formControls';
import classes from './login.module.css'

const maxLength50 = maxLengthCreator(50);

const LoginForm = ({handleSubmit, error}) => {

    return (
            <form onSubmit={handleSubmit}>
                {createField("email", "email", Input, [required, maxLength50, ])}
                {createField("password", "password", Input, [required, maxLength50, ], {type: 'password'})}
                {createField(null, "rememderMe", Input, [], {type: 'checkbox'}), 'запомнить'}
                <div>{error}
                </div>
                <div>
                    <button>Войти</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.LogIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {LogIn: LogIn})(Login);

