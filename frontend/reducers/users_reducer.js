import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return Object.assign({}, oldstate, { [action.currentUser.id]: action.currentUser });
        default:
            return oldstate;
    }
}

export default usersReducer;
