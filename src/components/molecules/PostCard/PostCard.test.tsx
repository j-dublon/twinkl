import { fireEvent, render } from "@testing-library/react";
import { PostCard } from "./PostCard";
import { mockPost } from "./fixtures";
import { Mock } from "vitest";

const mockRemovePost: Mock = vi.fn();

describe("Component: PostCard", () => {
  it("SHOULD match snapshot", () => {
    const component = render(
      <PostCard post={mockPost} removePost={mockRemovePost} />,
    );
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render text content as expected WHEN props are provided", () => {
    const { getByText } = render(
      <PostCard post={mockPost} removePost={mockRemovePost} />,
    );
    expect(getByText(mockPost.title));
    expect(getByText(mockPost.body));
  });

  it("SHOULD call the removePost function with the correct id WHEN use clicks the X button", () => {
    const { getByText } = render(
      <PostCard post={mockPost} removePost={mockRemovePost} />,
    );
    fireEvent.click(getByText("X"));
    expect(mockRemovePost).toHaveBeenCalledWith(mockPost.id);
  });
});
