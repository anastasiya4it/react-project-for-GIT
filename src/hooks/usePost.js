import { useMemo } from 'react';
export const useSortedPost = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        return (sort) ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) :
            posts;
    }, [sort, posts])
    return sortedPosts;
}
export const usePost = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort);

    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts])
    return sortedAndSearchedPost;
}
export default usePost;