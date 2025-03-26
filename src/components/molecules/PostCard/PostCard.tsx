import { PostCardProps } from "@/types";
import { FC } from "react";

export const PostCard: FC<PostCardProps> = ({ post, removePost }) => (
  <div
    className="m-4 pb-1 focus:outline-none focus:ring-2 focus:ring-blue-500 border-b-1 border-b-zinc-300 flex flex-row justify-between items-center"
    tabIndex={0}
    aria-label="Post content"
  >
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
    <button
      className="text-xl text-red-600 hover:text-red-900 ml-16"
      onClick={() => removePost(post.id)}
      aria-label={`Remove ${post.title} post`}
    >
      X
    </button>
  </div>
);
