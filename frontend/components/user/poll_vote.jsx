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
        // setInterval(this.doSomething, 5000);
        // setInterval(this.props.fetchPoll(this.props.pollId), 5000);
        setInterval(this.forceUpdate(), 5000);

    }

    // doSomething() {
    //     alert('This pops up every 5 seconds and is annoying!');
    // }

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
                <div className='vote-form-div'>
                    <h1>{this.props.polls[0].title}</h1>
                    <ul className='temp-vote-buttons'>
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
                    <form className='vote-porm'>
                        {/* {let myOptions = this} */}
                        <select multiple>
                            <option value="volvo">car</option>
                            <option value="saab">Saab</option>
                        </select>
                        <button type="submit">Vote</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default VoteTake;