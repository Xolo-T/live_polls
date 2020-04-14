import React from 'react';
import { Link } from 'react-router-dom';


class OptionIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <button>{this.props.option.title}</button>
                <p>{this.props.option.count}</p>
            </li>
        )
    }
}

export default OptionIndexItem;