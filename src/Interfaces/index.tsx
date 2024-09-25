export interface SplashProps {
  navigation: any;
}

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  company_name: string;
};

// Post Type
export type Post = {
  id: string;
  created_at: string;
  text: string;
  user: User;
  likes_count: number;
  replies_count: number;
};

export type PostProps = {
  post: Post;
  onLike: (post_id: string) => void;
  onDislike: (post_id: string) => void;
};
