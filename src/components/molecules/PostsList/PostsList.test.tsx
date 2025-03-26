import { render } from "@testing-library/react";
import { PostsList } from "./PostsList";
import { mockPosts } from "./fixtures";
import { MockPostCard } from "./mock-components";
import { PostCardProps } from "@/types";

vi.mock("../../molecules/ProductsList/ProductsList", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as Record<string, any>),
    default: (props: PostCardProps) => <MockPostCard {...props} />,
  };
});

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
