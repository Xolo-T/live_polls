import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
