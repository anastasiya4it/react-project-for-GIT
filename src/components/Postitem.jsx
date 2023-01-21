import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import Post from './Post';
import { useNavigate } from "react-router-dom";

const Postitem = (props) => {
    let navigate = useNavigate();
    // console.log(props);
    return (
        <div className='post'>
            <Post posts={props.posts} number={props.number} />
            <div className='post__btns'>
                <MyButton onClick={() => props.remove(props.posts)}>Delete</MyButton>
                <MyButton onClick={() => navigate(`/posts/${props.posts.id}`)}>More</MyButton>
            </div>
        </div>
    );
};
export default Postitem;