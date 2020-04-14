import React from 'react';
import { Link } from 'react-router-dom';
import OptionIndexItem from './option_index_item';

class PollShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPoll(this.props.poll.id)
        this.props.fetchOptions(this.props.poll.id)
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
                <ul>
                    {
                        this.props.options.map(option => (
                            // <p>{poll.title}</p>
                            <OptionIndexItem
                                option={option}
                            />
                             )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default PollShow;