import { Post } from "@/types";

export const fetchAllPosts = async (): Promise<Post[] | null> => {
  try {
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await postsResponse.json();

    return posts;
  } catch (error) {
    console.log("Error fetching all posts: ", error);
    return null;
  }
};
