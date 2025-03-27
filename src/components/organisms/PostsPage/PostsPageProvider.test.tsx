import { vi } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { PostsPageProvider } from "./PostsPageProvider";
import { MockError, MockPostsPage, MockSearchInput } from "./mock-components";
import { PostPageProps, SearchInputProps } from "@/types";
import { deletePost, fetchAllPosts } from "@/services/posts";
import { mockPosts } from "@/tests/mockData";

vi.mock("../../atoms/Error/Error", () => ({
  Error: () => <MockError />,
}));
vi.mock("./PostsPage", () => ({
  PostsPage: (props: PostPageProps) => <MockPostsPage {...props} />,
}));
vi.mock("../../atoms/SearchInput/SearchInput", () => ({
  SearchInput: (props: SearchInputProps) => <MockSearchInput {...props} />,
}));
vi.mock("../../../services/posts", async (importOriginal: any) => {
  const mod = await importOriginal();
  return {
    ...mod,
    deletePost: vi.fn(),
    fetchAllPosts: vi.fn(),
  };
});

describe("Component: PostsPageProvider", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("SHOULD match snapshot", async () => {
    vi.mocked(fetchAllPosts).mockResolvedValue(mockPosts);

    const component = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });

  it("SHOULD render the PostsPage component WHEN posts are available", async () => {
    vi.mocked(fetchAllPosts).mockResolvedValue(mockPosts);

    const { getByText, queryByText } = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(queryByText("Loading...")).toBeNull();
    });
    expect(getByText("Mock Posts Page"));
  });

  it("SHOULD render the Error component WHEN postsResponse is null", async () => {
    vi.mocked(fetchAllPosts).mockResolvedValue(null);

    const { getByText, queryByText } = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(queryByText("Loading...")).toBeNull();
    });
    expect(getByText("Error!"));
  });

  it("SHOULD call deletePost service WHEN child component calls handleRemovePost", async () => {
    vi.mocked(fetchAllPosts).mockResolvedValue(mockPosts);
    vi.mocked(deletePost).mockResolvedValue({ status: 200 });

    const { getByText, queryByText } = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(queryByText("Loading...")).toBeNull();
    });

    fireEvent.click(getByText("Mock Posts Page"));
    await waitFor(() => {
      expect(deletePost).toHaveBeenCalledWith(1);
    });
  });

  it("SHOULD call fetchAllPosts service with search term WHEN SearchInput child component updates inputValue", async () => {
    vi.mocked(fetchAllPosts).mockResolvedValue(mockPosts);

    const { getByText, queryByText } = render(<PostsPageProvider />);
    await waitFor(() => {
      expect(queryByText("Loading...")).toBeNull();
    });

    fireEvent.click(getByText("Mock Search Input"));
    await waitFor(
      () => {
        expect(fetchAllPosts).toHaveBeenCalledWith("Mock");
      },
      { timeout: 2000 },
    );
  });
});
