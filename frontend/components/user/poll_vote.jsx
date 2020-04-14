import React from 'react';
import { Link } from 'react-router-dom';
import OptionVoteIndexItem from './option_vote_index_item';

import * as APIUtil from '../../util/poll_api_util';

class VoteTake extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    UNSAFE_componentWillMount(){
        debugger
        this.props.fetchPoll(this.props.pollId)
        this.props.fetchOptions(this.props.pollId)
        debugger
    }

    // UNSAFE_componentDidMount() {
    //     debugger
    //     this.props.fetchPoll(this.props.pollId)
    //     this.props.fetchOptions(this.props.pollId)
    //     debugger
    // }

    render() {
        debugger
        return (
            <div>
                {/* <Link to='/'>PollIndex</Link> */}
                <Link to='/' className=''>
                    <button className='home-main-body-nav-button'>
                        Visit Live Polls
                    </button>
                </Link>
                <h1>{this.props.polls[0].title}</h1>
                <ul>
                    {
                        this.props.options.map(option => (
                            // <p>{poll.title}</p>
                            <OptionVoteIndexItem
                                option={option}
                                updateOption={this.props.updateOption}
                                key={option.id}
                            />
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default VoteTake;