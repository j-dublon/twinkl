import { PostCardProps } from "@/types";
import { FC } from "react";

export const MockPostCard: FC<PostCardProps> = ({ post }) => (
  <div>{post.title}</div>
);
