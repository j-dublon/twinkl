import { PostListProps } from "@/types";
import { FC } from "react";
import { PostCard } from "../PostCard/PostCard";

export const PostsList: FC<PostListProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostCard post={post} key={post.id} />
    ))}
  </>
);
