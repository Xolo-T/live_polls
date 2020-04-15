import React from 'react';
// import TestShowContainer from './create_post_form_container';


class TestShow extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchPoll(this.props.pollId);
    }

    render() {
        // const { posts, deletePost } = this.props;
        if (!this.props.polls) {
            // quacks slice of state was populated from the show page
            // but not the authors slice of state!
            return <span>No poll yet!</span>;
        }
        return (
            <div>
                <ul>
                    {
                        this.props.polls.map(poll => (
                            // <PostIndexItem
                            //     post={post}
                            //     deletePost={deletePost}
                            //     key={post.id}
                            // />
                            <p>{poll.title}</p>
                        ))
                    }
                </ul>
                {/* <CreatePostFormContainer /> */}
            </div>
        );
    }
}

export default TestShow;