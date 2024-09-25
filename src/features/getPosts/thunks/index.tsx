import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../../Networking/config';
import httpClient from '../../../Networking/httpClient';

interface getPostsParams {
  page: number;
}

// Get All Posts
export const getVideosAsync = createAsyncThunk(
  'postsList',
  async (params: getPostsParams) => {
    const {page} = params;
    const link = `${BASE_URL}/timeline?page=${page}`;
    const response = await httpClient.callAPI('GET', link, {}, null);
    return response;
  },
);

// Add Like
interface postLikeParams {
  post_id: string;
}

// Add Like Post
export const postLikeAsync = createAsyncThunk(
  'postsLike',
  async (params: postLikeParams) => {
    const link = `${BASE_URL}/like`;
    const response = await httpClient.callAPI('POST', link, params, null);
    return response;
  },
);

interface postDislikeParams {
  post_id: string;
}

// Get Posts Dislike
export const postDislikeAsync = createAsyncThunk(
  'postsDislike',
  async (params: postDislikeParams) => {
    const link = `${BASE_URL}/unlike`;
    const response = await httpClient.callAPI('POST', link, params, null);
    return response;
  },
);
