import React, { Component } from 'react';
import Comment from './Comment.js'

export default class BlogPost extends Component {
  render() {
    
    const comments = [
      "Tell my wifi love her", 
      "Ken M was here",
      "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."
    ]
    
    return (
      <div id="blog-post" className="wrapper">
        Alright internet trolls<br/>
        Come at me<br/>
        I have been preparing<br/>
        My meme fortress is built<br/>
        I won't let you tilt me<br/>
        You only grew accustomed to the salt<br/>
        I was born in it<br/>
        <Comment commentText={comments[0]} />
        <Comment commentText={comments[1]} />
        <Comment commentText={comments[2]} />
      </div>
    );
  }
}
