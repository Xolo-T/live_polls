
import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";
import configureStore from './store/store';

// Testing
// import { signup, login, logout} from './util/session_api_util';
import * as SessionActions from './actions/session_actions';

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
    // ReactDOM.render(<h1 className='header'>Welcome to LivePolls</h1>, root);
    ReactDOM.render(<Root store={store} />, root);
});