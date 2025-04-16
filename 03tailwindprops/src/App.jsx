import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let user = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3, 4]

  return (
    <>
       <h1 className="bg-amber-200 text-black p-4 rounded-2xl mb-5">
        Tailwend Test
      </h1>
      <Card channel="Chai Aur Code" myObj={user} myArr={newArr}/>
    </>
  );
}

export default App;
