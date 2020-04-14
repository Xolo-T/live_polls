import React from 'react';
import { Link } from 'react-router-dom';


class OptionIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                {/* <button onClick={() => this.props.updateOption(this.props.option.id)}>
                    {this.props.option.title}
                </button> */}
                <h2> {this.props.option.title} </h2>
                <h1>{this.props.option.count}</h1>
            </li>
        )
    }
}

export default OptionIndexItem;