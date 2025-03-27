import { deletePost, fetchAllPosts } from "../../services/posts";
import { mockPosts } from "../mockData";
import { mockFetch, mockFetchError } from "../helpers";

describe("Service: fetchAllPosts", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("SHOULD call the correct API route WHEN invoked with no title query", async () => {
    mockFetch(mockPosts);

    const res = await fetchAllPosts();
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts",
    );
    expect(res).toEqual(mockPosts);
  });

  it("SHOULD call the correct API route WHEN invoked with a title query", async () => {
    mockFetch(mockPosts);
    const mockTitleQuery: string = "Something";

    const res = await fetchAllPosts(mockTitleQuery);
    expect(fetch).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/posts?title_like=${mockTitleQuery}`,
    );
    expect(res).toEqual(mockPosts);
  });

  it("SHOULD return null WHEN an error occurs", async () => {
    mockFetchError();

    const res = await fetchAllPosts();
    expect(res).toBeNull();
  });
});

describe("Service: deletePost", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("SHOULD call the correct API route WHEN invoked", async () => {
    mockFetch();
    const mockId: number = 1;

    const res = await deletePost(mockId);
    expect(fetch).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/posts/${mockId}`,
      { method: "DELETE" },
    );
    expect(res).toEqual({ status: 200 });
  });

  it("SHOULD return null WHEN an error occurs", async () => {
    mockFetchError();
    const mockId: number = 1;

    const res = await deletePost(mockId);
    expect(res).toEqual({ status: 500 });
  });
});
