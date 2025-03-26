import { fetchAllPosts } from "../../services/posts";
import { mockPosts } from "./fixtures";
import { mockFetch, mockFetchError } from "../helpers";

describe("Helper: mockFetch", () => {
  it("SHOULD mock fetch and return data WEHN invoked ", async () => {
    mockFetch(mockPosts);

    const response = await fetch("https://example.com/posts");
    const posts = await response.json();

    expect(posts).toEqual(mockPosts);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

describe.only("Helper: mockFetchError", () => {
  it("SHOULD return null WHEN an error occurs", async () => {
    mockFetchError();

    const res = await fetchAllPosts();
    expect(res).toBeNull();
  });
});
