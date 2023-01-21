import React from 'react';

const Comments = (props) => {

    return (
        <div className='post'>
            <strong>name: {props.post.name}</strong>
            <div>email: {props.post.email}</div>
            <div>comment: {props.post.body}</div>

        </div>
    );
};

export default Comments;