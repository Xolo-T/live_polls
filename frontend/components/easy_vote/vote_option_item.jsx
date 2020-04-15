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
                <div className='one-option-div'>
                    <p>yey!!</p>
                    <h1>{this.props.option.count}</h1>
                    <h1> {this.props.option.title} </h1>
                    {/* <button onClick={() => this.props.updateOption(this.props.option.id)}>Vote</button> */}
                    <button onClick={this.handleClick}>Vote</button>
                </div>
            </li>
        )
    }
}

export default VoteOptionItem;