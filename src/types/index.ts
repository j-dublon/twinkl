export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type PostPageProps = {
  posts: Post[];
};

export type PostListProps = {
  posts: Post[];
};

export type PostCardProps = {
  post: Post;
};
