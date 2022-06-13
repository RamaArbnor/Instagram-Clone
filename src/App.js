import React from 'react';
import Navbar from './components/Navbar';
import StoryPanel from './components/StoryPanel';
import './App.css';
import Post from './components/Post';
// import naruto from "./images/naruto.jpg"
import data from "./data/posts.json"


function App() {

  const posts = data.map(post => {
    return (
      <Post
        key={post.id}
        id={post.id}
        pfp={post.pfp}
        username={post.username}
        postImg={post.postImg}
        likes={post.likes}
        caption={post.caption}
        comments={post.comments}
      />
    )
  }
  )


  return (
    <div className="App">
      <Navbar />
      <main>
        <StoryPanel />
        {posts}
        
       


      </main>
    </div>
  );
}

export default App;
