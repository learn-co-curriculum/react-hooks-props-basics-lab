// import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { useState } from "react";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {

  const [color, setColor] = useState("firebrick")

  console.log(color)

  return (
    <div>
      <NavBar color={color} />
      <Home 
        name={user.name} 
        city={user.city} 
        color={color}
        setColor={setColor}
      />
      <About bio={user.bio} color={color} />
    </div>
  );
}

export default App;
