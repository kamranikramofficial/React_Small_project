import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

const handleOnGetClick = () => {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      addInitialPost(data.posts);
    });
};

  return (
    <>
      {postList.length === 0 && <WelcomeMessage OnGetClick={handleOnGetClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
