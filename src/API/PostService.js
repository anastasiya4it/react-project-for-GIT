import axios from 'axios';
export default class PostService {

    static async getAll(limit, page) {
        const respons = await axios.get('https://jsonplaceholder.typicode.com/posts',
            {
                params: {
                    _limit: limit,
                    _page: page,
                }
            }
        )
        return respons;

    }

    static async getById(id) {
        const respons = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
        return respons;

    }
    static async getCommentsById(id) {
        const respons = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`,
            {
                method: 'GET',
            })
            .then(data => data.json());
        return respons;

    }

}