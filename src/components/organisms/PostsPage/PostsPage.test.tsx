import { vi } from "vitest";
import { render } from "@testing-library/react";
import { PostsPage } from "./PostsPage";
import { mockPosts } from "@/tests/mockData";
import { MockEmptyList, MockPostsList } from "./mock-components";
import { PostListProps } from "@/types";

vi.mock("../../molecules/PostsList/PostsList", () => ({
  PostsList: (props: PostListProps) => <MockPostsList {...props} />,
}));

vi.mock("../../atoms/EmptyList/EmptyList", () => ({
  EmptyList: () => <MockEmptyList />,
}));

describe("Component: PostsPage", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<PostsPage posts={mockPosts} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render the PostsList component WHEN posts are available", () => {
    const { getByText } = render(<PostsPage posts={mockPosts} />);
    expect(getByText("Mock Posts List"));
  });

  it("SHOULD render the EmptyList component WHEN posts are not available", () => {
    const { getByText } = render(<PostsPage posts={[]} />);
    expect(getByText("Mock Empty List"));
  });
});
