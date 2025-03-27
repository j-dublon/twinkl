import { PostListProps, PostPageProps, SearchInputProps } from "@/types";
import { FC } from "react";

export const MockPostsList: FC<PostListProps> = () => (
  <div>Mock Posts List</div>
);

export const MockEmptyList: FC = () => <div>Mock Empty List</div>;

export const MockPostsPage: FC<PostPageProps> = ({ removePost }) => (
  <div onClick={() => removePost(1)}>Mock Posts Page</div>
);

export const MockError: FC = () => <div>Error!</div>;

export const MockSearchInput: FC<SearchInputProps> = ({ onChange }) => (
  <div onClick={() => onChange("Mock")}>Mock Search Input</div>
);
