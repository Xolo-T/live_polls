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
        setInterval(this.forceUpdate(), 1000)
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
                <div className='poll-show-title'>
                    <h3> To vote please visit: 
                        <Link className='link-to-vote-page' to={`/vote/${this.props.poll.id}`}>
                            {`/vote/${this.props.poll.id}`}
                        </Link>
                    </h3>
                    <h1>{this.props.poll.title}</h1>
                </div>
                <ul className='options-div'>
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
                <div className='pollshowPage-links-div'>
                    <Link className='link-to-vote-page' to={`/vote/${this.props.poll.id}`}> Go to votting page</Link>
                    <button onClick={this.handleClick}>Delete Poll</button>
                </div>
            </div>
        )
    }
}

export default PollShow;