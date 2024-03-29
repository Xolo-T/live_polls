import React from 'react';
import { Link } from 'react-router-dom';
import OptionIndexItem from './option_index_item';

import OptionsChart from "./graph";

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
            <div className='poll-show-page-full'>
                
                <header className='header'>
                    <div className='header-logo-nav'>
                        <div className='header-logo-div'>
                            <div className='logo'>
                                <Link to='/'>
                                    <h1 >Live Polls</h1>
                                </Link>
                            </div>
                        </div>
                        <div className='header-nav'>
                            <a className='header-nav-link' href='https://github.com/Solomon-T/live_polls' target="_blank">Github repo</a>
                            <a className='header-nav-link' href="https://www.linkedin.com/in/solomon-timothy-manyaga-305a51b4/" target="_blank">LinkedIn</a>
                            <a className='header-nav-link' href="https://solomon-t.github.io/" target="_blank">Developer</a>
                        </div>
                    </div>
                    <nav className="logout-nav">
                        {/* <button className="header-button">Activate</button> */}
                        <Link 
                            className='nav-session-link' 
                            // to={`https://live-polls.herokuapp.com/#/vote/${this.props.pollId}`}
                            to={`/vote/${this.props.pollId}`}
                            >
                            Voting Page
                        </Link>
                    </nav>
                </header>

                <main id='poll-Show-nav' className='poll-show-main-div'>
                <div className='poll-live-div'>
                    <div className='poll-live-instructions'>
                        <p> To vote please visit: </p>
                        <h4 className='poll-voting-link'>
                                <a className='poll-voting-link' href={`https://live-polls.herokuapp.com/#/vote/${this.props.pollId}`}>
                                    {`https://live-polls.herokuapp.com/#/vote/${this.props.pollId}`}
                                </a>
                        </h4>
                        {/* <p> to vote using option id visite the link</p>  */}
                        <p>OR</p>
                        <p><a className='poll-voting-link' href="https://live-polls.herokuapp.com/#/text/vote">
                                    https://live-polls.herokuapp.com/#/text/vote
                            </a>
                        </p>
                    </div>
                        
                    <div className='showPoll-title-div'>
                            
                        <OptionsChart 
                                options={this.props.options}
                                pollTitle={this.props.poll.title}
                        />
                             
                        {/* <div id='options-index-items'>
                            <h1>{this.props.poll.title}</h1>
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
                        </div> */}
                    </div>
                </div>

                <nav id='poll-show-side-nav' className='home-main-body-nav'>
                    <div>
                        <Link to='/' className=''>
                            <button
                                className='home-main-body-nav-button'
                                id='create-poll'
                            >
                                    My polls 
                            </button>
                        </Link>
                            
                        {/* <button className='home-main-body-nav-button'> Edit</button> */}
                    </div>

                    <div>
                        {/* <button className='home-main-body-extra-button'>My polls</button> */}
                        {/* <button className='home-main-body-extra-button'>Trash</button> */}
                        {/* <br/> */}
                        <button className='home-main-body-extra-button' onClick={this.handleClick}> Delete</button>
                    </div>

                </nav>


                </main>
            </div>
        )
    }
}

export default PollShow;