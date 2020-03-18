/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React,{useState} from "react";
import "./App.css";
import CommentSection from "./components/CommentSection/CommentSectionContainer.js";
// import the  PostsPage and SearchBar and add them to the App

import Post from "./components/PostsContainer/Post.js";
import SearchBar from "./components/SearchBar/SearchBarContainer";

const App = () => {

  return (
    <div className="App">
      {Post,CommentSection,SearchBar}
    </div>
  );
};

export default App;
