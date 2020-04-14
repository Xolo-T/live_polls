import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePoll, fetchPolls, fetchPoll } from '../../actions/poll_actions';
import { createOption } from '../../actions/option_actions';
import UserPolls from './user_polls';

const mapStateToProps = (state) => {
    return {
        // polls: state.entities.polls,
        currentUserId: state.session.id,
        polls: Object.keys(state.entities.polls).map(key => state.entities.polls[key])
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPolls: (author_id) => dispatch(fetchPolls(author_id)),
        fetchPoll: (poll_id) => dispatch(fetchPoll(poll_id)),
        deletePoll: (poll_id) => dispatch(deletePoll(poll_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPolls);