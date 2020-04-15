import * as APIUtil from '../util/option_api_util';

export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';
export const RECEIVE_OPTION = 'RECEIVE_OPTION';
export const RECEIVE_OPTION_ERRORS = 'RECEIVE_OPTION_ERRORS';

export const receiveOptions = options => ({
    type: RECEIVE_OPTIONS,
    options
});

export const receiveOptionErrors = option => ({
    type: RECEIVE_OPTION_ERRORS,
    errors
});

export const receiveOption = option => ({
    type: RECEIVE_OPTION,
    option
});

export const fetchOptions = poll_id => dispatch => (
    APIUtil.fetchOptions(poll_id).then(options => (
        dispatch(receiveOptions(options))
    ))
);

export const createOption = option => dispatch => (
    APIUtil.createOption(option).then(option => (
        dispatch(receiveOption(option))
    ))
);

export const updateOption = option_id => dispatch => (
    APIUtil.updateOption(option_id).then(
        option => (dispatch(receiveOption(option)),
            errors => dispatch(receiveOptionErrors(errors.responseJSON))
    ))
);


export const deleteOption = option_id => dispatch => (
    APIUtil.deleteOption(option_id).then(options => (
        dispatch(receiveOptions(options))
    ))
);