import React from 'react';
import { Link } from 'react-router-dom';
import VoteOptionItem from './vote_option_item';

class BetterVoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        // debugger
        this.props.fetchPoll(this.props.pollId)
        this.props.fetchOptions(this.props.pollId)
        // setInterval(this.forceUpdate(), 1000)
    }

    handleClick() {
        this.props.deletePoll(this.props.poll.id)
            .then(this.props.history.push(`/`))
    }

    render() {
        // debugger
        if (!this.props.poll) {
            return <span>Nothing yet!</span>;
        }

        return (
            <div>


                {/* <Link to='/'>PollIndex</Link> */}
                <Link to='/' className='poll-show-back-link'>
                    <button
                        className='home-main-body-nav-button'
                    >
                        Back to my polls
                    </button>
                </Link>
                <div className='poll-show-title'>
                    <h3> is this what you looking for? </h3>
                    <h3> Thanks for polling live </h3>
                    <h3>sorry to break your heart but this poll</h3>

                </div>
                <div className='showPoll-title-div'>
                    <h1>{this.props.poll.title}</h1>
                </div>
                <ul className='options-div'>
                    {
                        this.props.options.map(option => (
                            // <p>{poll.title}</p>
                            <VoteOptionItem
                                option={option}
                                updateOption={this.props.updateOption}
                                key={option.id}
                                history={this.props.history}
                            />
                        )
                        )
                    }
                </ul>
                <div className='pollshowPage-links-div'>
                    <Link className='link-to-vote-page' to={`/vote/${this.props.poll.id}`}> Go to votting page</Link>
                    <button onClick={this.handleClick}>Delete Poll</button>
                </div>
            </div>
        )
    }
}

export default BetterVoteForm;