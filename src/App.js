import { useReducer } from "react";
import Lightbulb from "./Lightbulb";
import "./App.css";
import { reducer } from "./reducers/reducer";

const App = () => {
  const initialState = {
    allLights: false,
    light: [false],
    inputValue: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event) => {
    dispatch({ action: "INPUT_CHANGE", payload: event.target.value });
  };

  const handleAllLight = () => {
    dispatch({ action: "ALL_LIGHTS" });
  };

  const handleClick = (clickIndex) => {
    dispatch({ action: "TOGGLE", payload: clickIndex });
  };

  const { inputValue, light } = state;

  return (
    <div className="app">
      <button className="main-button" onClick={handleAllLight}>
        ALL ON/OFF
      </button>
      <input
        className="main-input"
        value={inputValue}
        type="number"
        onChange={handleInputChange}
      />
      <div className="button-row">
        {light.map((light, index) => {
          return (
            <div key={index} className="lightbulb">
              <Lightbulb fillColor={light ? "yellow" : "black"} />
              <button
                className="lightbulb-button"
                onClick={() => handleClick(index)}
              >
                ON/OFF
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
