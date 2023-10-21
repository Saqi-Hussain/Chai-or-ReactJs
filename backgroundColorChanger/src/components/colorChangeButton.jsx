import React from "react";

let root = document.getElementById("body");

function Btn({ btnText, btnColor, textColor = "text-white", color = "" }) {
  function bgColorChange() {
    body.style.backgroundColor = `${color}`;
  }

  return (
    <button className={`${btnColor} ${textColor} rounded-3xl`} onClick={bgColorChange}>
      {btnText}
    </button>
  );
}

export default Btn;
