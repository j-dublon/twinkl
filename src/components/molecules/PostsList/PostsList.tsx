import { PostListProps } from "@/types";
import { FC } from "react";
import { PostCard } from "../PostCard/PostCard";

export const PostsList: FC<PostListProps> = ({ posts, removePost }) => (
  <>
    {posts.map((post) => (
      <PostCard post={post} removePost={removePost} key={post.id} />
    ))}
  </>
);
