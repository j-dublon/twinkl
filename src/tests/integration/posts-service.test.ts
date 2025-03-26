import { fetchAllPosts } from "../../services/posts";
import { mockPosts } from "../mockData";
import { mockFetch, mockFetchError } from "../helpers";

describe("Service: fetchAllPosts", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("SHOULD call the correct API route WHEN invoked", async () => {
    mockFetch(mockPosts);

    const res = await fetchAllPosts();
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(res).toEqual(mockPosts);
  });

  it("SHOULD return null WHEN an error occurs", async () => {
    mockFetchError();

    const res = await fetchAllPosts();
    expect(res).toBeNull();
  });
});
