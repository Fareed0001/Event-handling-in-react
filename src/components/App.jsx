import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("Hello");

  const [isMouseOver, setMouseOver] = useState(false);
  // first we set use state to false, when mouse is over the Element, yhe handleMouseOver fucntion gets triggered
  // this sets the useState isMouseOver boolean to true
  // when the mouse is not hovering the Element, the onMouseOut event listener, the function handleMouseOut sets the setMouseOver eventlistener to false

  function click() {
    setHeading("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={click}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        // here the style is controlled by the useState vale isMouseOver, on true it triggers the black background color and on false it triggers the white
      >
        Submit
      </button>
    </div>
  );
}

export default App;
