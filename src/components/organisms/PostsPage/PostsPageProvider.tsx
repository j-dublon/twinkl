import { fetchAllPosts } from "@/services/posts";
import { Post } from "@/types";
import { FC, useEffect, useState } from "react";
import { PostsPage } from "./PostsPage";
import { Loading } from "@/components/atoms";

export const PostsPageProvider: FC = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[] | null>();

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const posts = await fetchAllPosts();
      setPosts(posts);
      setLoading(false);
    };
    getPosts();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {posts && <PostsPage posts={posts} />}
    </>
  );
};
