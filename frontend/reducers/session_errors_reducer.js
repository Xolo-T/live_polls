import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // debugger
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return oldState;
    }
};