import React from 'react';
import { Link } from 'react-router-dom';


class VoteOptionItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.updateOption(this.props.option.id)
            .then(this.props.history.push(`/`))
    }

    render() {
        return (
            <li>
                <div className='vote-option-div'>
                    {/* <button onClick={() => this.props.updateOption(this.props.option.id)}>Vote</button> */}
                    <button 
                        className='vote-button' 
                        onClick={this.handleClick}>
                            Vote
                    </button>
                    <p className='vote-option-title'> {this.props.option.title} </p>
                </div>
            </li>
        )
    }
}

export default VoteOptionItem;