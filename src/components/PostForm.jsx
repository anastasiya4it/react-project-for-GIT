import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });
    const addNewPost = (item) => {
        item.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({ title: '', body: '' });
    }
    return (
        <form>
            {/* Упровляемый компонент */}
            <MyInput
                tupe='text'
                placeholder='Название поста'
                value={post.title}
                onChange={event => setPost({ ...post, title: event.target.value })} />

            <MyInput
                tupe='text'
                placeholder='Описание поста'
                value={post.body}
                onChange={event => setPost({ ...post, body: event.target.value })} />




            <MyButton onClick={addNewPost}>Создание поста</MyButton>
        </form>
    );
};

export default PostForm;