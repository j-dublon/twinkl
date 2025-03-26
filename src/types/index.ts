export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type PostPageProps = {
  posts: Post[];
  removePost: (id: number) => void;
};

export type PostListProps = {
  posts: Post[];
  removePost: (id: number) => void;
};

export type PostCardProps = {
  post: Post;
  removePost: (id: number) => void;
};
