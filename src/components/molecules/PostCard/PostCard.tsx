import { PostCardProps } from "@/types";
import { FC } from "react";

export const PostCard: FC<PostCardProps> = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <br />
  </div>
);
