import { PostCardProps } from "@/types";
import { FC } from "react";

export const PostCard: FC<PostCardProps> = ({ post }) => (
  <div
    className="m-4 pb-1 focus:outline-none focus:ring-2 focus:ring-blue-500 border-b-1 border-b-zinc-300"
    tabIndex={0}
    aria-label="Post content"
  >
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>
);
