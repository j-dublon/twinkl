import { PostListProps } from "@/types";
import { FC } from "react";

export const MockPostsList: FC<PostListProps> = () => (
  <div>Mock Posts List</div>
);

export const MockEmptyList: FC = () => <div>Mock Empty List</div>;
