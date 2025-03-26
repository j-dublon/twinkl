import { fetchAllPosts } from "../../services/posts";
import { mockPosts } from "../mockData";
import { mockFetch, mockFetchError } from "../helpers";

describe("Helper: mockFetch", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("SHOULD mock fetch and return data WEHN invoked ", async () => {
    mockFetch(mockPosts);

    const response = await fetch("https://example.com/posts");
    const posts = await response.json();

    expect(posts).toEqual(mockPosts);
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
