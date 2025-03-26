import { render } from "@testing-library/react";
import { PostCard } from "./PostCard";
import { mockPost } from "./fixtures";

describe("Component: PostCard", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<PostCard post={mockPost} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render text content as expected WHEN props are provided", () => {
    const { getByText } = render(<PostCard post={mockPost} />);
    expect(getByText(mockPost.title));
    expect(getByText(mockPost.body));
  });
});
