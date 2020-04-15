import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPoll } from '../../actions/poll_actions';
import { fetchOptions } from '../../actions/option_actions';

import TestShow from './test_show';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        pollId: ownProps.match.params.postId,
        polls: Object.keys(state.entities.polls).map(key => state.entities.polls[key]),
        options: Object.keys(state.entities.options).map(key => state.entities.options[key])
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPoll: (poll_id) => dispatch(fetchPoll(poll_id)),
        fetchOptions: (pollId) => dispatch(fetchOptions(pollId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestShow);