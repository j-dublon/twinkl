import { fetchAllPosts } from "@/services/posts";
import { Post } from "@/types";
import { FC, useEffect, useState } from "react";
import { PostsPage } from "./PostsPage";
import { Error, Loading } from "../../atoms";

export const PostsPageProvider: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const posts = await fetchAllPosts();
      if (!posts) {
        setError(true);
      } else {
        setPosts(posts);
      }
      setLoading(false);
    };
    getPosts();
  }, []);

  const handleRemovePost = () => {};

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <PostsPage posts={posts} removePost={handleRemovePost} />
      )}
    </>
  );
};
