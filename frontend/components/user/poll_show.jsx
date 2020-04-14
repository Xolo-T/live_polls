import React from 'react';
import { Link } from 'react-router-dom';

class PollShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPoll(this.props.poll.id)
    }

    render() {
        return (
            <div>
                
                {/* <Link to='/'>PollIndex</Link> */}
                <Link to='/' className=''>
                    <button
                        className='home-main-body-nav-button'
                        
                    >
                        Back to polls
                    </button>
                </Link>
                <h1>{this.props.poll.title}</h1>
            </div>
        )
    }
}

export default PollShow;