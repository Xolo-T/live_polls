import { connect } from 'react-redux';
import { fetchPoll, deletePoll } from '../../actions/poll_actions';
import { fetchOptions, updateOption } from '../../actions/option_actions';
import VoteTake from './poll_vote';


const msp = (state, ownProps) => {
    debugger
    return ({
        pollId: ownProps.match.params.pollId,
        polls: Object.keys(state.entities.polls).map(key => state.entities.polls[key]),
        options: Object.keys(state.entities.options).map(key => state.entities.options[key])
    })
}

const mdp = (dispatch) => ({
    fetchPoll: (pollId) => dispatch(fetchPoll(pollId)),
    deletePoll: (pollId) => dispatch(deletePoll(pollId)),
    fetchOptions: (pollId) => dispatch(fetchOptions(pollId)),
    updateOption: (optionId) => dispatch(updateOption(optionId)),
})

export default connect(msp, mdp)(VoteTake)