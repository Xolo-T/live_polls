import * as APIUtil from '../util/poll_api_util';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const RECEIVE_POLL = 'RECEIVE_POLL';

export const receivePolls = polls => ({
    type: RECEIVE_POLLS,
    polls,
});

export const receivePoll = poll => ({
    type: RECEIVE_POLL,
    poll,
});

export const fetchPolls = author_id => dispatch => (
    APIUtil.fetchPolls(author_id).then(polls => (
        dispatch(receivePolls(polls))
    ))
);

export const fetchPoll = author_id => dispatch => (
    APIUtil.fetchPoll(author_id).then(poll => (
        dispatch(receivePoll(poll))
    ))
);

export const createPoll = poll => dispatch => (
    APIUtil.createPoll(poll).then(poll => (
        dispatch(receivePoll(poll))
    ))
);

export const deletePoll = poll_id => dispatch => (
    APIUtil.deletePoll(poll_id).then(polls => (
        dispatch(receivePolls(polls))
    ))
);