import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0">
        <div className="flex flex-wrap justify-center gap-5 rounded-full p-2"
        style={{backgroundColor: 'white'}}>
          <button
            className="rounded-3xl text-white p-2 bg-black"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="rounded-3xl text-white p-2 bg-orange-500"
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="rounded-3xl text-white p-2 bg-pink-500"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="rounded-3xl text-white p-2 bg-red-500"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="rounded-3xl text-white p-2 bg-green-500"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-3xl text-white p-2 bg-blue-800"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-3xl text-white p-2 bg-yellow-500"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="rounded-3xl text-white p-2 bg-amber-800"
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
          <button
            className="rounded-3xl text-white p-2 bg-blue-400"
            onClick={() => setColor("skyblue")}
          >
            Sky Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
