import { deletePost, fetchAllPosts } from "@/services/posts";
import { Post } from "@/types";
import { FC, useEffect, useState } from "react";
import { PostsPage } from "./PostsPage";
import { Error, Loading, SearchInput } from "../../atoms";
import { useDebounce } from "use-debounce";

export const PostsPageProvider: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm] = useDebounce(inputValue, 1000);

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
    getPosts(searchTerm);
  }, [searchTerm]);

  const handleRemovePost = async (postId: number) => {
    setLoading(true);
    const res = await deletePost(postId);
    if (res?.status !== 200) {
      // Show user a toast message
      // E.g. Sorry, there was a problem deleting the post, please try again
    }
    setLoading(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <SearchInput onChange={handleSearch} value={inputValue} />
          <PostsPage posts={posts} removePost={handleRemovePost} />
        </>
      )}
    </>
  );
};
