import React from 'react';
import { Link } from 'react-router-dom';

class PollIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className='user-poll'>
                    <Link to={`/polls/${this.props.poll.id}`}>{this.props.poll.title}</Link>
            </li>
        )
    }
}

export default PollIndexItem;