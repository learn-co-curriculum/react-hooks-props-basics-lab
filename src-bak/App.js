import React from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

function App() {

  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!

  return (
    <div id="app">
      <BlogPost />
      <div id="seperator"></div>
      <div className="wrapper">
        <ColorBox opacity={1} />
      </div>
    </div>
  )
}

export default App;
