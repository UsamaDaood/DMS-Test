import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  getVideosAsync,
  postLikeAsync,
} from '../../features/getPosts/thunks/index';
import {toastShow} from '../../libs/toast';
import {useDispatch} from 'react-redux';
import {Post, PostProps} from '../../Interfaces/index';
import {
  IC_COMMNET,
  IC_HEART,
  IC_REPOST,
  IC_SAVE,
  IC_SHARE,
} from '../../utils/ImageSource';
import {styles} from '../../Styles/NewsFeedStyles';

// Post Component
const PostItem = ({post, onLike}: PostProps) => {
  const [likes, setLikes] = useState(post.likes_count);
  // const [dislikes, setDislikes] = useState(post);

  // Handle Like
  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
    onLike(post.id); // Call parent function (callback)
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image
          source={{uri: post.user.profile_image_url}}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.user.first_name}</Text>
          <Text style={styles.companyName}>{post.user.company_name}</Text>
        </View>
      </View>
      <Text style={styles.text}>{post.text}</Text>
      <Text style={styles.timestamp}>
        {new Date(post.created_at).toDateString()}
      </Text>
      <View style={styles.line} />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.likeText}>{likes} Likes</Text>
        <Text style={styles.replies}>Replies: {post.replies_count}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.footer}>
        {/* <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
          <Text style={styles.likeText}>👍 {likes}</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.dislikeButton}>
          <Image
            source={IC_COMMNET}
            style={styles.iconImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dislikeButton}>
          <Image
            source={IC_REPOST}
            style={styles.iconImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dislikeButton}>
          <Image
            source={IC_SAVE}
            style={styles.iconImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dislikeButton}>
          <Image
            source={IC_SHARE}
            style={styles.iconImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dislikeButton} onPress={handleLike}>
          <Image
            source={IC_HEART}
            style={styles.iconImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Main Component with Pagination
const SocialMediaFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1); // Current page
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // To track if more posts are available
  const dispatch = useDispatch<any>();

  // Fetch posts on component mount and when page changes
  useEffect(() => {
    const loadPosts = async () => {
      if (loading || !hasMore) return; // Prevent duplicate requests
      setLoading(true);

      //   const response: any = await fetchPosts(page);
      const postParams = {
        page: page,
      };
      dispatch(getVideosAsync(postParams))
        .unwrap()
        .then((response: any) => {
          console.log('RESULT: POSTS ', response?.data);
          setPosts(prevPosts => [...prevPosts, ...response?.data]); // Append new posts
          setHasMore(page < response.totalPages); // Check if more pages are available
          setLoading(false);
        })
        .catch(() => {
          toastShow('error', 'Something wrong');
          setLoading(false);
        });
    };

    loadPosts();
  }, [page]);

  // Function to load more posts when reaching the end
  const loadMorePosts = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  // API call for Like
  const apiCallLike = (post_id: string) => {
    // API CALL
    const likeParams = {
      post_id: post_id,
    };

    dispatch(postLikeAsync(likeParams))
      .unwrap()
      .then((response: any) => {
        console.log('RESULT: POSTS LIKE: ', response);
      })
      .catch(() => {
        toastShow('error', 'Something wrong');
      });
  };

  // API call for DisLike
  const apiCallDisLike = (postId: string) => {};

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <PostItem post={item} onLike={apiCallLike} onDislike={apiCallDisLike} />
      )}
      contentContainerStyle={styles.list}
      onEndReached={loadMorePosts} // Trigger loadMorePosts when reaching the end
      onEndReachedThreshold={0.5} // How close to the end before triggering onEndReached
      ListFooterComponent={
        loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
      } // Loading spinner
    />
  );
};

export default SocialMediaFeed;
