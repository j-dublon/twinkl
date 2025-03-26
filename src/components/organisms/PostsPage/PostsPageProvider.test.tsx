import { vi } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { PostsPageProvider } from "./PostsPageProvider";
import { MockError, MockPostsPage } from "./mock-components";
import { PostPageProps } from "@/types";
import { mockFetch, mockFetchError } from "@/tests/helpers";
import { mockPosts } from "@/tests/mockData";
const { mockDeletePost } = await vi.hoisted(
  async () => await import("./fixtures")
);

vi.mock("../../atoms/Error/Error", () => ({
  Error: () => <MockError />,
}));
vi.mock("./PostsPage", () => ({
  PostsPage: (props: PostPageProps) => <MockPostsPage {...props} />,
}));
vi.mock("../../../services/posts", async (importOriginal: any) => {
  const mod = await importOriginal();
  return {
    ...mod,
    deletePost: mockDeletePost,
  };
});

describe("Component: PostsPageProvider", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("SHOULD match snapshot", async () => {
    mockFetch(mockPosts);

    const component = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });

  it("SHOULD render the PostsPage component WHEN posts are available", async () => {
    mockFetch(mockPosts);

    const { getByText, queryByText } = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(queryByText("Loading...")).toBeNull();
    });
    expect(getByText("Mock Posts Page"));
  });

  it("SHOULD render the Error component WHEN postsResponse is null", async () => {
    mockFetchError();

    const { getByText, queryByText } = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(queryByText("Loading...")).toBeNull();
    });
    expect(getByText("Error!"));
  });

  it("SHOULD call deletePost service WHEN child component calls handleRemovePost", async () => {
    mockFetch(mockPosts);
    mockFetch(undefined, "DELETE");

    const { getByText, queryByText } = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(queryByText("Loading...")).toBeNull();
    });

    fireEvent.click(getByText("Mock Posts Page"));
    await waitFor(() => {
      expect(mockDeletePost).toHaveBeenCalledWith(1);
    });
  });
});
