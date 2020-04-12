import * as APIUtil from '../util/poll_api_util';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';

export const receivePolls = polls => ({
    type: RECEIVE_POLLS,
    polls,
});

export const fetchPolls = author_id => dispatch => (
    APIUtil.fetchPolls(author_id).then(polls => (
        dispatch(receivePolls(polls))
    ))
);
