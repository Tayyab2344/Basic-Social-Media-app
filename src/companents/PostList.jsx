import React, { useContext } from "react";
import Post from "./Post";
import { PostList as data } from "../Store/PostListProvider";

const PostList = () => {
  const { postList } = useContext(data);
  console.log(postList);

  return (
    <>
      {postList && postList.length > 0 ? (
      postList.map((post) => (
        <Post key={post.id} post = {post} />
      ))
    )
  :
  <p className="font-bold text-center text-2xl">No Post available</p>
  }
    </>
  );
};

export default PostList;
