import { RECEIVE_POLLS, RECEIVE_POLL } from '../actions/poll_actions';

const pollsReducer = (state = {}, action) => {
    Object.freeze(state);
    const polls = {};
    switch (action.type) {
        case RECEIVE_POLLS:
            action.polls.forEach((poll) => {
                polls[poll.id] = poll;
            });
            return polls;
        case RECEIVE_POLL:
            return Object.assign({}, state, { [action.poll.id]: action.poll });
        default:
            return state;
    }
};

export default pollsReducer; 