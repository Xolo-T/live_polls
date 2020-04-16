import React from 'react';
import { Link } from 'react-router-dom';
import OptionIndexItem from './option_index_item';

class PollShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.refreshInterval = null;
        
    }

    componentDidMount() {
        // debugger
        this.props.fetchPoll(this.props.pollId)
        this.props.fetchOptions(this.props.pollId)
        this.refreshInterval = setInterval(this.handleRefresh, 250)
        setTimeout(() => clearInterval(this.refreshInterval), 120000);
    }

    componentWillUnmount(){
        // console.log('Component saying bye')
        // debugger
        clearInterval(this.refreshInterval)
    }

    handleClick() {
        this.props.deletePoll(this.props.poll.id)
            .then( this.props.history.push(`/`) ) 
    }

    handleRefresh() {
        this.props.fetchOptions(this.props.pollId)
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
                <button onClick={this.handleRefresh}> refresh</button>
                <div className='poll-show-title'>
                    <h3> To vote please visit: </h3>
                    <h2>{`https://live-polls.herokuapp.com/#/vote/${this.props.pollId}`}</h2>
                    <h3> to vote using option id visite the link</h3> 
                    <h3> 'https://live-polls.herokuapp.com/#/text/vote'</h3>
                    
                </div>
                <div className='showPoll-title-div'>
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