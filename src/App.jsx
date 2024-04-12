import { useState } from "react";
import Button from "./component/Button";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");

  const changeBackground = (color) => {
    setBackgroundColor(color);
  };
  return (
    <>
      <div className="App" style={{ backgroundColor: backgroundColor }}>
        <div className="buttons">
          <Button colorName="red" changeBackground={changeBackground} />
          <Button colorName="green" changeBackground={changeBackground} />
          <Button colorName="blue" changeBackground={changeBackground} />
        </div>
      </div>
    </>
  );
}

export default App;
