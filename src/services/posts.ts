import { Post } from "@/types";

export const fetchAllPosts = async (): Promise<Post[] | null> => {
  try {
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );
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
      },
    );
    return { status: res.status };
  } catch (error) {
    console.log("Error deleting post: ", error);
    return { status: 500 };
  }
};
