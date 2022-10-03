import { useState } from "react";
import "./AddDesigner.css";

const AddDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");
  const [darkButton, setDarkButton] = useState<Boolean>(true);
  const [lightButton, setLightButton] = useState<Boolean>(false);
  const [fontSize, setFontSize] = useState(40);

  function toggleButton() {
    darkButton === true ? setDarkButton(false) : setDarkButton(true);
    lightButton === true ? setLightButton(false) : setLightButton(true);
  }

  const increaseFontSize = (): void => {
    if (fontSize <= 95) {
      setFontSize((prev) => prev + 5);
    }
  };

  const decreaseFontSize = (): void => {
    if (fontSize >= 5) {
      setFontSize((prev) => prev - 5);
    }
  };

  let classes = "Counter";
  if (fontSize < 0) {
    classes = "Counter negative";
  }

  return (
    <div className="AddDesigner">
      <h2 className="h2">Ad Designer</h2>
      <div className="Box">
        Vote for <br />{" "}
        <text className="flavor" style={{ fontSize }}>
          {flavor}
        </text>
      </div>
      <h3> What to Support </h3>
      <div className="flavorButtons">
        <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
        <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
      </div>

      <h3> Color Theme </h3>
      <div className="colorButtons">
        <button disabled={lightButton === false} onClick={toggleButton}>
          Light
        </button>
        <button disabled={darkButton === false} onClick={toggleButton}>
          Dark
        </button>
      </div>

      <h3>Font Size</h3>
      <div className="counterButtons">
        <table>
          <tr>
            <td>
              <button onClick={decreaseFontSize}>Down</button>
            </td>
            <td>
              <p>{fontSize}</p>
            </td>
            <td>
              <button onClick={increaseFontSize}>Up</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddDesigner;
