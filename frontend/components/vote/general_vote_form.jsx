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
        debugger
    }

    updatePoll(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.updateOption(this.state.pollId)
            .then(this.props.history.push(`/`))
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
                        {this.state.pollTitleError}
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