import { EmptyList } from "@/components/atoms/EmptyList/EmptyList";
import { PostPageProps } from "@/types";
import { FC } from "react";

export const PostsPage: FC<PostPageProps> = ({ posts }) => (
  <>
    {posts.length === 0 ? (
      <EmptyList />
    ) : (
      posts.map((post) => <div>{post.title}</div>)
    )}
  </>
);
