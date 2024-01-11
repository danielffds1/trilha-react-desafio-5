import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    try {
        const { data } = await api.get(`/posts/${id}`);
        if (data) {
          return data;
        }
        return {};
      } catch (error) {
        console.error(`Error fetching post with ID ${id}:`, error);
        throw error;
      }

    return {}
}