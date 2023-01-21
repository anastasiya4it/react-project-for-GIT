import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import Comments from '../components/Comments';

const PostIdPage = () => {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const userId = useParams();


    const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
        const respons = await PostService.getById(userId.id);
        setPost(respons.data[0]);
    });

    const [fetchCommentsById, LoadingCommentsById, ErrorCommentsById] = useFetching(async () => {
        const respons = await PostService.getCommentsById(userId.id);
        setComments(respons);
    });
    useEffect(() => {
        fetchPostById();
        fetchCommentsById();
    }, []);


    return (
        <div >
            {(isPostLoading) ?
                <Loader /> :
                <div className='post'><strong>{post.title}</strong><br /> {post.body}</div>}
            <div className='post__list'>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>Comments</h1>
                {LoadingCommentsById ?
                    <Loader />
                    :
                    <TransitionGroup>
                        {comments.map((item, index) =>
                            <CSSTransition
                                key={item.id}
                                timeout={500}
                                classNames="post" >
                                <Comments post={item} />
                            </CSSTransition>
                        )}

                    </TransitionGroup>
                }

            </div>
        </div >
    );
};

export default PostIdPage;