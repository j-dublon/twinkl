import { render } from "@testing-library/react";
import { PostsList } from "./PostsList";
import { mockPosts } from "@/tests/mockData";
import { MockPostCard } from "./mock-components";
import { PostCardProps } from "@/types";

vi.mock("../PostCard/PostCard", () => ({
  PostCard: (props: PostCardProps) => <MockPostCard {...props} />,
}));

describe("Component: PostsList", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<PostsList posts={mockPosts} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render a PostCard component for each post WHEN props are provided", () => {
    const { getByText } = render(<PostsList posts={mockPosts} />);
    mockPosts.forEach((post) => {
      expect(getByText(post.title));
    });
  });
});
