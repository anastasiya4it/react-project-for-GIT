import React from 'react';

const Post = (props) => {

    return (
        <div >
            <strong>{props.number}. {props.posts.title}</strong>
            <div>{props.posts.body}</div>

        </div>
    );
};

export default Post;