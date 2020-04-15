import React from 'react';
import { Link } from 'react-router-dom';

class CreatePoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            poll: {},
            firstOption: {},
            seconOption: {},

            pollTitle: '',
            firstOptionTitle: '',
            seconOptionTitle: '',
            
            pollTitleError: '',
            firstOptionTitleError: '',
            seconOptionTitleError: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updatePoll(field) {
        return e => this.setState({
            [field]:  { title: e.currentTarget.value, author_id: this.props.author_id },
            ['pollTitle']: e.currentTarget.value
        });
    }

    updateFirstOption(field) {
        return e => this.setState({
            [field]: { title: e.currentTarget.value },
            // firstOption: { title: e.currentTarget.value }
            ['firstOptionTitle']: e.currentTarget.value
        });
    }

    updateSecondOption(field) {
        return e => this.setState({
            [field]: { title: e.currentTarget.value },
            // firstOption: { title: e.currentTarget.value }
            ['seconOptionTitle']: e.currentTarget.value
        });
    }

    validate() {
        let pollTitleError = ''
        let firstOptionTitleError = ''
        let seconOptionTitleError = ''

        if (this.state.pollTitle.length == 0) {
            pollTitleError = "Please enter a title"
        }

        if (this.state.firstOptionTitle.length == 0) {
            firstOptionTitleError = "Please enter a response"
        }
        
        if (this.state.seconOptionTitle.length == 0) {
            seconOptionTitleError = "Please enter a response"
        }
        if (pollTitleError) {
            this.setState({ pollTitleError })
            this.setState({ seconOptionTitleError })
            this.setState({ firstOptionTitleError })
            return false
        }

        if (seconOptionTitleError) {
            this.setState({ pollTitleError })
            this.setState({ seconOptionTitleError })
            this.setState({ firstOptionTitleError })
            return false
        }

        if (firstOptionTitleError) {
            this.setState({ firstOptionTitleError })
            this.setState({ pollTitleError })
            this.setState({ seconOptionTitleError })
            return false
        }
        return true;
    };

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){
            this.props.createPoll(this.state.poll)
                .then(
                    (action) =>{
                        let pollOne = Object.assign({}, this.state.firstOption, {})
                        // debugger
                        pollOne.poll_id = action.poll.id
                        // debugger
                        return(    
                            this.props.createOption(pollOne)
                        )
                    })

                .then( 
                    (action) => {
                        let pollTwo = Object.assign({}, this.state.seconOption, {})
                        // debugger
                        pollTwo.poll_id = action.option.poll_id
                        // debugger
                        return (
                            this.props.createOption(pollTwo)
                        )
                    })
                .then(
                    () => this.props.history.push('/')
                );
        }
    }

    // renderErrors() {
    //     return (
    //         <ul className='session-input-errors'>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`} >
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className='landing-page-full'>

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
                            <Link to='/polls' className='header-nav-link'>Polls</Link>
                            <Link to='/polls' className='header-nav-link'>Participants</Link>
                            <Link to='/polls' className='header-nav-link'>Reports</Link>
                            <Link to='/polls' className='header-nav-link'>More</Link>
                        </div>
                    </div>
                    <nav className="logout-nav">
                        {/* <button className="header-button" onClick={logout}>Log Out</button> */}
                        <button className="header-button">Log Out</button>
                        {/* <Link className='nav-session-link' to="/signup">{currentUser.username}!</Link> */}
                        <Link className='nav-session-link' to="/signup">hu ha</Link>
                    </nav>
                </header>

                <main>
                    <div className='create-poll-main'>
                        {/* <h1 className="header-name">Hi, {currentUser.username}!</h1> */}

                        <section className='create-poll-main-div'>
                            <p>Ask a question and let participants choose from a list of answers.</p>
                            {/* <form onSubmit={this.handleSubmit} className="login-form-box"> */}
                            <Link to='/' className=''>
                                <button
                                    className='home-main-body-nav-button'
                                    id='create-poll'
                                >
                                    Back to polls
                                </button>
                            </Link>
                            <form onSubmit={this.handleSubmit} className="create-poll-form">
                                {/* {this.renderErrors()} */}
                                <div className="create-poll-form-div">
                                    <br />
                                    <label>
                                        <input type="text"
                                            // value={this.state.pollTitle}
                                            onChange={this.updatePoll('poll')}
                                            className="create-form-input "
                                            placeholder="Title"
                                        />
                                        <div className='create-poll-error-div'>{this.state.pollTitleError}</div>
                                    </label>
                                    <br />
                                    <br/>
                                    <label>
                                        <input type="text"
                                            value={this.state.firstOptionTitle}
                                            onChange={this.updateFirstOption('firstOption')}
                                            className="create-form-input"
                                            placeholder="text"
                                        />
                                        <div className='create-poll-error-div'>{this.state.firstOptionTitleError}</div>
                                    </label>
                                    <label>
                                        <input type="text"
                                            value={this.state.seconOptionTitle}
                                            onChange={this.updateSecondOption('seconOption')}
                                            className="create-form-input"
                                            placeholder="text"
                                        />
                                        <div className='create-poll-error-div'>{this.state.seconOptionTitleError}</div>
                                    </label>
                                    <br />
                                    <div className='submit-poll-div'>
                                        <input className="new-poll-submit"
                                            type="submit"
                                            // value={this.props.formType}
                                            />
                                    </div>
                                </div>
                            </form>
                        </section>


                    </div>

                </main>
            </div>
        )
    }
}

export default CreatePoll;