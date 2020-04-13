import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPoll } from '../../actions/poll_actions';
import { createOption } from '../../actions/option_actions';
import CreatePoll from './create_poll';

const mapStateToProps = (state) => {
    return {
        author_id: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createPoll: (poll_params) => dispatch(createPoll(poll_params)),
        createOption: (option_params) => dispatch(createOption(option_params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll);