import { RECEIVE_OPTIONS, RECEIVE_OPTION } from '../actions/option_actions';

const optionsReducer = (state = {}, action) => {
    Object.freeze(state);
    const options = {};
    switch (action.type) {
        case RECEIVE_OPTIONS:
            action.options.forEach((option) => {
                options[option.id] = option;
            });
            return options;
        case RECEIVE_OPTION:
            return Object.assign({}, state, { [action.option.id]: action.option });
        default:
            return state;
    }
};

export default optionsReducer; 