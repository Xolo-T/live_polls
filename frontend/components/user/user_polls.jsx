import React from 'react';
import { Link } from 'react-router-dom';
import PollIndexItem from './poll_index_item';

class UserPolls extends React.Component {
    constructor(props) {
        super(props);
        // this.pollsArray = Object.values(this.props.fetchPolls(this.props.currentUserId))
    }

    componentDidMount(){
        // debugger
        this.props.fetchPolls(this.props.currentUserId)
    }

    render() {
        // debugger
        return (
            <div className='current user polls'>
                <h1>My Polls</h1>
                <ul className='user-polls-ul'>
                    {
                        this.props.polls.map(poll => (
                            // <p>{poll.title}</p>
                            <PollIndexItem
                                poll={poll}
                                key={poll.id}
                            />
                            )
                        )
                    }
                </ul>

            </div>
        )
    }
}

export default UserPolls;