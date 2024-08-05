import React, { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { PostList } from "../Store/PostListProvider";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card mx-4 my-3" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="cursor-pointer position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdOutlineDelete />
          </span>
        </h5>
        <p className="card-text text-justify">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge rounded-pill text-bg-primary mx-1">
            {tag}
          </span>
        ))}
        <div className="mt-3 alert alert-success" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};

export default Post;
