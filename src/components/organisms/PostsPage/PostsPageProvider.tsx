import { fetchAllPosts } from "@/services/posts";
import { Post } from "@/types";
import { FC, useEffect, useState } from "react";
import { PostsPage } from "./PostsPage";

export const PostsPageProvider: FC = () => {
  const [posts, setPosts] = useState<Post[] | null>();

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchAllPosts();
      setPosts(posts);
    };
    getPosts();
  }, []);

  return <>{posts && <PostsPage posts={posts} />}</>;
};
