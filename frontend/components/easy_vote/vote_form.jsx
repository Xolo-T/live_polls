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
            <div className='better-vote-form-div'>
                <div className='voting-page-welcome-div'>
                    <h4 > Welcome to our voting page </h4>
                </div>
                <div className='vote-instructions-div'>
                    <p> To vote simply click the vote button
                         next to your choice.  </p>
                    <p> Once you vote you will be redirected to our home page.
                         There is no experimental clicking. </p>
                    <p>On this note please be careful with accidental votes</p>
                </div>
                <div className='thank-you-voter-div'>
                    <p>Thanks for polling with us.</p>
                </div>


                <div className='better-vote-form'>
                    <h1 className='better-vote-form-title'>
                        {this.props.poll.title}
                    </h1>
                    <p className='last-voting-instruction'>Just click 'Vote' to vote</p>
                    <ul>
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
                </div>
                <Link className='vote-logo' to='/'>
                    <h2>Live Polls</h2>
                </Link>
            </div>
        )
    }
}

export default BetterVoteForm;