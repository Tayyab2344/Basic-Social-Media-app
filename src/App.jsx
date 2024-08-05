import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import SideBar from "./companents/SideBar";
import CreatePost from "./companents/CreatePost";
import PostList from "./companents/PostList";
import { useState } from "react";
import PostListProvider from "./Store/PostListProvider";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="flex">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="w-full">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
