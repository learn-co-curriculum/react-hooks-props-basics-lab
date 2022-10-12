import React from "react";

function Home(jabberwocky) {
  return (
    <div id="home">
      <h1 style={{ color: jabberwocky.color }}>
        {jabberwocky.name} is a Web Developer from {jabberwocky.city}
      </h1>
    </div>
  );
}

export default Home;
