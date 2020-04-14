import React from 'react';
import { Link } from 'react-router-dom';

/*
Export an `EventIndexItem` presentational component that takes in an `event`
and the `deleteEvent` action via props. The component should render an `li`
containing the following:

1. A link to the event's show page with text of the event's description
2. A link to the event's edit page with text 'Edit'.
3. A button to delete the event.
*/


class PollIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <Link to={`/polls/${this.props.poll.id}`}>{this.props.poll.title}</Link>
                {/* <Link to={`/events/${this.props.event.id}/edit`}>Edit</Link>
                <button onClick={() => this.props.deleteEvent(this.props.event.id)}>D</button> */}
            </li>
        )
    }
}

export default PollIndexItem;