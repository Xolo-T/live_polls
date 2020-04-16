import React from 'react';
import { Link } from 'react-router-dom';

class GenrralVoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pollId: '',
            pollIdError: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // debugger
    }

    updatePoll(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    validate() {
        let pollIdError = ''
        let numPrased = parseInt(this.state.pollId)
        // debugger

        if (this.state.pollId.length == 0) {
            pollIdError = "Please enter an option id"
        } else if ( isNaN(parseInt(numPrased))) {
            pollIdError = "An option id is a number"
        }

        if (pollIdError) {
            this.setState({ pollIdError })
            return false
        }

        return true;
    };

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            // this.props.updateOption(this.state.pollId)
            // debugger
            let voteId = parseInt(this.state.pollId) / 23
            let realId = voteId.toString()
            // debugger
            this.props.updateOption(realId)
                .then(this.props.history.push(`/`))
        }
    }

    render() {
        return (
            <div className="vote-form- div">
                <form onSubmit={this.handleSubmit} className="general-vote-form">
                    <h1 className='vote-form-header' >Pleease submit the id of your choice</h1>
                    <input type="text"
                        onChange={this.updatePoll('pollId')}
                        className="vote-form-input "
                        placeholder="option Id"
                    />
                    <div className='vote-form-error-div'>
                        <p>{this.state.pollIdError}</p>
                    </div>
                    <br />
                    <div className='submit-vote-div'>
                        {/* <input className="vote-form-submit" type="submit"/> */}
                        <button type="submit" className="vote-form-submit"> Vote </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GenrralVoteForm;