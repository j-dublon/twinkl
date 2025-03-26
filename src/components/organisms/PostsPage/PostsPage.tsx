import { EmptyList } from "../../atoms";
import { PostsList } from "../../molecules";
import { PostPageProps } from "@/types";
import { FC } from "react";

export const PostsPage: FC<PostPageProps> = ({ posts, removePost }) => (
  <>
    {posts.length === 0 ? (
      <EmptyList />
    ) : (
      <PostsList posts={posts} removePost={removePost} />
    )}
  </>
);
