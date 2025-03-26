import { Post } from "@/types";

export const fetchAllPosts = async (title?: string): Promise<Post[] | null> => {
  try {
    const fetchUrl = `https://jsonplaceholder.typicode.com/posts${title ? `?title_like=${title}` : ""}`;
    const postsResponse = await fetch(fetchUrl);
    const posts = await postsResponse.json();

    return posts;
  } catch (error) {
    console.log("Error fetching all posts: ", error);
    return null;
  }
};

export const deletePost = async (postId: number) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "DELETE",
      }
    );
    return { status: res.status };
  } catch (error) {
    console.log("Error deleting post: ", error);
    return { status: 500 };
  }
};
