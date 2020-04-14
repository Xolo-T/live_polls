import React from 'react';
import { Link } from 'react-router-dom';
import OptionIndexItem from './option_index_item';

class PollShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchPoll(this.props.poll.id)
        this.props.fetchOptions(this.props.poll.id)
    }

    handleClick() {
        this.props.deletePoll(this.props.poll.id)
            .then( this.props.history.push(`/`) ) 
    }

    render() {
        return (
            <div>
                
                {/* <Link to='/'>PollIndex</Link> */}
                <Link to='/' className=''>
                    <button
                        className='home-main-body-nav-button'
                    >
                        Back to my polls
                    </button>
                </Link>
                <Link to={`/vote/${this.props.poll.id}`}> Go to votting page</Link>
                <h1>{this.props.poll.title}</h1>
                <ul>
                    {
                        this.props.options.map(option => (
                            // <p>{poll.title}</p>
                            <OptionIndexItem
                                option={option}
                                updateOption={this.props.updateOption}
                                key={option.id}
                            />
                             )
                        )
                    }
                </ul>
                <button onClick={this.handleClick}>Delete Poll</button>
            </div>
        )
    }
}

export default PollShow;