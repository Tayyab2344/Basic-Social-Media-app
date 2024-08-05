import { createContext, useReducer, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currReducer, action) => {
  let newReducer = currReducer;
  if (action.type === "DELETE_POST") {
    newReducer = currReducer.filter(
      (post) => post.id !== action.PayLoad.PostID
    );
  } else if (action.type === "ADD_POST") {
    newReducer = [action.PayLoad, ...currReducer];
  }
  return newReducer;
};

const PostListProvider = ({ children }) => {
  const addPost = (userid, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      PayLoad: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userID: userid,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const deletePost = (PostID) => {
    dispatchPostList({
      type: "DELETE_POST",
      PayLoad: {
        PostID,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    [],
    () => {
      const localData = localStorage.getItem("postList");
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("postList", JSON.stringify(postList));
  }, [postList]);

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
