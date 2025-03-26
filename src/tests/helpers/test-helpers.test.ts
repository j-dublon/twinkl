import { fetchAllPosts } from "../../services/posts";
import { mockPosts } from "../mockData";
import { mockFetch, mockFetchError } from "../helpers";

describe("Helper: mockFetch", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("SHOULD mock fetch and return data WHEN invoked with no method", async () => {
    mockFetch(mockPosts);

    const response = await fetch("https://example.com/posts");
    const posts = await response.json();

    expect(posts).toEqual(mockPosts);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("SHOULD mock fetch and return status 200 WHEN invoked with no data and method DELETE", async () => {
    mockFetch(undefined, "DELETE");

    const response = await fetch("https://example.com/posts/1", {
      method: "DELETE",
    });
    expect(response.status).toBe(200);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

describe("Helper: mockFetchError", () => {
  it("SHOULD return null WHEN an error occurs", async () => {
    mockFetchError();

    const res = await fetchAllPosts();
    expect(res).toBeNull();
  });
});
