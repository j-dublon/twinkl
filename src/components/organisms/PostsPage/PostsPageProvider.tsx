import { deletePost, fetchAllPosts } from "@/services/posts";
import { Post } from "@/types";
import { FC, useEffect, useRef, useState } from "react";
import { PostsPage } from "./PostsPage";
import { Error, Loading, SearchInput } from "../../atoms";
import { useDebounce } from "use-debounce";

export const PostsPageProvider: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm] = useDebounce(inputValue, 1000);
  const prevSearchTermRef = useRef<string>("");

  const getPosts = async (query?: string) => {
    setLoading(true);
    const posts = await fetchAllPosts(query);
    if (!posts) {
      setError(true);
    } else {
      setPosts(posts);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (searchTerm !== prevSearchTermRef.current) {
      getPosts(searchTerm);
      prevSearchTermRef.current = searchTerm;
    }
  }, [searchTerm]);

  const handleRemovePost = async (postId: number) => {
    setLoading(true);
    const res = await deletePost(postId);
    if (res?.status !== 200) {
      // Show user a toast message
      // E.g. Sorry, there was a problem deleting the post, please try again
    }
    // TEMPORARILY remove deleted post - will come back when page refreshed!
    const newPosts = posts.filter((post) => post.id !== postId);
    setPosts(newPosts);
    setLoading(false);
  };

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <>
          <SearchInput
            onChange={(val) => setInputValue(val)}
            value={inputValue}
          />
          {loading ? (
            <Loading />
          ) : (
            <PostsPage posts={posts} removePost={handleRemovePost} />
          )}
        </>
      )}
    </>
  );
};
