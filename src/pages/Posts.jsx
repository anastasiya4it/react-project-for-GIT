import '../styles/App.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/myModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import usePost from '../hooks/usePost';
import { getLimitPages } from '../utils/page';
import Pogination from '../components/UI/pogination/Pogination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const lastElement = useRef();


    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const respons = await PostService.getAll(limit, page);
        setPosts([...respons.data]);
        const totalCount = respons.headers['x-total-count'];
        setTotalPages(getLimitPages(totalCount, limit));
    });




    useEffect(() => {
        fetchPost(limit, page);
    }, [page, limit]);

    const sortedAndSearchedPost = usePost(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }
    const removePost = (item) => {
        setPosts(posts.filter(d => d.id !== item.id))
    }

    const changePage = (item) => {
        setPage(item);
    }


    return (
        <div className="App">
            <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
                Создание поста
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }}></hr>
            <PostFilter
                filter={filter}
                setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Количество элементов на странице'
                options={[{ value: 5, name: '5' },
                { value: 10, name: '10' },
                { value: -1, name: 'Показать все' },]} />

            {postError &&
                <h1 style={{ textAlign: 'center' }}>Произошла ошибка ${postError}</h1>}
            <PostList remove={removePost} posts={sortedAndSearchedPost} title={'Список постов JS'} />
            <div ref={lastElement} ></div>
            {(isPostLoading) &&
                <div style={{ margin: '50px', display: 'flex', justifyContent: 'center' }}>  <Loader></Loader></div>
            }

            <Pogination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div >
    );
}

export default Posts;
