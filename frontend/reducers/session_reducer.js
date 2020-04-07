import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _defaultState = {
    session:{id: null}
}

const sessionReducers = (oldstate=_defaultState, action) =>{
    Object.freeze(oldstate);
    const newState = Object.assign({}, oldstate, {});

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return _defaultState;
        default:
            return oldstate;
    }
}

export default sessionReducers;