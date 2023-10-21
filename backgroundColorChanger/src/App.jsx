import { useState } from "react";
import "./App.css";
import Btn from "./components/colorChangeButton";

function App() {
  const resetColor = () => {
    body.style.backgroundColor = `grey`;
  };
  return (
    <>
      <div className="flex flex-row justify-center gap-5 flex-wrap mt-96">
        <Btn btnText="Black" btnColor="bg-black" color="black" />
        <Btn
          btnText="White"
          btnColor="bg-white"
          textColor="text-black"
          color="white"
        />
        <Btn btnText="Blue" btnColor="bg-blue-800" color="blue" />
        <Btn btnText="Red" btnColor="bg-red-800" color="red" />
        <Btn
          btnText="Yellow"
          btnColor="bg-yellow-500"
          textColor="text-black"
          color="yellow"
        />
        <Btn btnText="Purple" btnColor="bg-purple-500" color="purple" />
        <Btn btnText="Green" btnColor="bg-green-500" color="green" />
      </div>

      <button className="mt-6 border-cyan-300 rounded-3xl" onClick={resetColor}>
        Reset BackGround Color
      </button>
    </>
  );
}

export default App;
