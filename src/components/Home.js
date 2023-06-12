import React from "react";

function Home({ name, color, city }) {
  console.log(name, color, city)
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
