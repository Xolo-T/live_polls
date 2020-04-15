import { RECEIVE_OPTION_ERRORS } from '../actions/option_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_OPTION_ERRORS:
            // debugger
            return action.errors;
        default:
            return oldState;
    }
};