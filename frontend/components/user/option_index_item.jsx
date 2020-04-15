import React from 'react';
import { Link } from 'react-router-dom';


class OptionIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <div className='one-option-div'>
                    <h1>{this.props.option.count}</h1>
                    <h2> {this.props.option.title} </h2>
                </div>
            </li>
        )
    }
}

export default OptionIndexItem;