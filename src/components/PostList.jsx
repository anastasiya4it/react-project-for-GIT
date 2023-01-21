import React, { useState } from 'react';
import Postitem from './Postitem';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
    return (posts.length == 0) ?
        (<div className='post__list'>
            <h1 style={{ textAlign: 'center' }}>Постов нет!</h1>
        </div >)
        :
        (
            <div className='post__list'>
                <h1 style={{ textAlign: 'center' }}>
                    {title}
                </h1>
                <TransitionGroup>

                    {posts.map((item, index) =>
                        <CSSTransition
                            key={item.id}

                            timeout={500}
                            classNames="item"
                        >
                            <Postitem remove={remove} number={index + 1} posts={item} />
                        </CSSTransition>
                    )}

                </TransitionGroup>
            </div>
        );
};
export default PostList;