// import React from "react";



function Home({name, color, city, setColor}) {

  function handleClick() {
    setColor("green")
  }

  return (
    <div id="home">
      <h1 style={{color}} id="header">
        {name} is a Web Developer from {city}
      </h1>
      <button onClick={handleClick}>Change Text Color</button>
    </div>
  );
}

export default Home;
