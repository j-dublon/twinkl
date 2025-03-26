export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type PostPageProps = {
  posts: Post[];
};
