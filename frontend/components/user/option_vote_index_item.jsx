import React from 'react';
import { Link } from 'react-router-dom';


class OptionVoteIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <button onClick={() => this.props.updateOption(this.props.option.id)}>
                    {this.props.option.title}
                </button>
                <p>{this.props.option.count}</p>
            </li>
        )
    }
}

export default OptionVoteIndexItem;