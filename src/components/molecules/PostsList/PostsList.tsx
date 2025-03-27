import { PostListProps } from "@/types";
import { FC } from "react";
import { PostCard } from "../PostCard/PostCard";

export const PostsList: FC<PostListProps> = ({ posts, removePost }) => (
  <div className="sm:w-70/100 lg:w-60/100 m-auto">
    {posts.map((post) => (
      <PostCard post={post} removePost={removePost} key={post.id} />
    ))}
  </div>
);
