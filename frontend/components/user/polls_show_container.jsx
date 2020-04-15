import { connect } from 'react-redux';
import { fetchPoll, deletePoll } from '../../actions/poll_actions';
import { fetchOptions, updateOption } from '../../actions/option_actions';
import PollShow from './poll_show';


const msp = (state, ownProps) => {
    debugger
    return(
        {
            poll: state.entities.polls[ownProps.match.params.pollId],
            options: Object.values(state.entities.options)
        }
    )
}

const mdp = (dispatch) => ({
    fetchPoll: (pollId) => dispatch(fetchPoll(pollId)),
    deletePoll: (pollId) => dispatch(deletePoll(pollId)),
    fetchOptions: (pollId) => dispatch(fetchOptions(pollId)),
    updateOption: (optionId) => dispatch(updateOption(optionId)),
})

export default connect(msp, mdp)(PollShow)