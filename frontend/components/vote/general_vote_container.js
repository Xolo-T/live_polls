import { connect } from 'react-redux';
import { fetchPoll, deletePoll } from '../../actions/poll_actions';
import { fetchOptions, updateOption } from '../../actions/option_actions';
import GenrralVoteForm from './general_vote_form';


const msp = (state, ownProps) => {
    // debugger
    return (
        {
            options: Object.values(state.entities.options)
        }
    )
}

const mdp = (dispatch) => ({
    // fetchPoll: (pollId) => dispatch(fetchPoll(pollId)),
    // fetchOptions: (pollId) => dispatch(fetchOptions(pollId)),
    updateOption: (optionId) => dispatch(updateOption(optionId)),
})

export default connect(msp, mdp)(GenrralVoteForm)