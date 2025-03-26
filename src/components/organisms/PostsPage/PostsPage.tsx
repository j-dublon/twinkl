import { PostPageProps } from "@/types";
import { FC } from "react";

export const PostsPage: FC<PostPageProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </>
  );
};
