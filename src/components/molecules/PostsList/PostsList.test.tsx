import { render } from "@testing-library/react";
import { PostsList } from "./PostsList";
import { mockPosts } from "@/tests/mockData";
import { MockPostCard } from "./mock-components";
import { PostCardProps } from "@/types";
import { Mock } from "vitest";

vi.mock("../PostCard/PostCard", () => ({
  PostCard: (props: PostCardProps) => <MockPostCard {...props} />,
}));

const mockRemovePost: Mock = vi.fn();

describe("Component: PostsList", () => {
  it("SHOULD match snapshot", () => {
    const component = render(
      <PostsList posts={mockPosts} removePost={mockRemovePost} />,
    );
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render a PostCard component for each post WHEN props are provided", () => {
    const { getByText } = render(
      <PostsList posts={mockPosts} removePost={mockRemovePost} />,
    );
    mockPosts.forEach((post) => {
      expect(getByText(post.title));
    });
  });
});
