
import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';
import { signup, login, logout} from './util/session_api_util';
import * as SessionActions from './actions/session_actions'

// Testing
// window.signup = signup;
// window.login = login;
// window.logout = logout;
// Testing

document.addEventListener("DOMContentLoaded", () => {

    // Testing
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = SessionActions.signup;
    window.login = SessionActions.login;
    window.logout = SessionActions.logout;
    // Testing

    const root = document.getElementById("root");
    ReactDOM.render(<h1 className='header'>Welcome to LivePolls</h1>, root);
});