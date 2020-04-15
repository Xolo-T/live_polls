
import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";
import configureStore from './store/store';

// import { 
//     fetchPolls, fetchPoll, createPoll, deletePoll
//     } from './actions/poll_actions'

import {
    fetchOptions, createOption, deleteOption, updateOption 
} from './actions/option_actions'

import { 
    fetchPolls, createPoll, deletePoll, fetchPoll
        } from './util/poll_api_util'
// import { 
//     fetchOptions, createOption, deleteOption, updateOption 
//         } from './util/option_api_util'

// Testing
// import { signup, login, logout} from './util/session_api_util';
import * as SessionActions from './actions/session_actions';

// window.signup = signup;
// window.login = login;
// window.logout = logout;
// Testing

document.addEventListener("DOMContentLoaded", () => {

    // Testing
    // window.signup = SessionActions.signup;
    // window.login = SessionActions.login;
    // window.logout = SessionActions.logout;
    
    window.fetchPolls = fetchPolls;
    window.createPoll = createPoll;
    window.deletePoll = deletePoll;
    window.fetchPoll = fetchPoll;


    window.fetchOptions = fetchOptions;
    window.createOption = createOption;
    window.deleteOption = deleteOption;
    window.updateOption = updateOption;

    // window.logout = SessionActions.logout;
    // window.logout = SessionActions.logout;

    // Testing

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
                polls: {}
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        debugger
        store = configureStore();
        // const preloadedState = {
        //     entities: {
        //         users: { [window.currentUser.id]: window.currentUser },
        //         polls: {}
        //     },
        //     session: { id: window.currentUser.id }
        // };
        // store = configureStore(preloadedState);
        // delete window.currentUser;
    }

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;    
    // window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    // ReactDOM.render(<h1 className='header'>Welcome to LivePolls</h1>, root);
    ReactDOM.render(<Root store={store} />, root);
});