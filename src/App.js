import React from 'react';
import Navbar from './components/Navbar';
import StoryPanel from './components/StoryPanel';
import './App.css';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <StoryPanel />
        <Post />
        <Post />
        <Post />
        <Post />

      </main>
    </div>
  );
}

export default App;
