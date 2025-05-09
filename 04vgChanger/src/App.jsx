import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-screen h-screen " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-4 rounded-3xl font-black">
          <button
          onClick={() => setColor("red")}
            className="outline-none px-5 py- rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
          onClick={() => setColor("green")}
            className="outline-none px-5 py- rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={() => setColor("blue")}
            className="outline-none px-5 py- rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={() => setColor("orange")}
            className="outline-none px-5 py- rounded-full shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
          onClick={() => setColor("yellow")}
            className="outline-none px-5 py- rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
