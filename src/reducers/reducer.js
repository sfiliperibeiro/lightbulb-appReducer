export const reducer = (state, action) => {
  switch (action.action) {
    case "ALL_LIGHTS":
      const newState = state.light.map(() => !state.allLights);
      return { ...state, light: newState, allLights: !state.allLights };

    case "TOGGLE":
      const newLightState = state.light.map((light, lightIndex) =>
        lightIndex === action.payload ? !light : light
      );
      return { ...state, light: newLightState };

    case "INPUT_CHANGE":
      if (action.payload.match(/\d+/)) {
        const newLigthArray = Array(Number(action.payload)).fill(false);

        return { ...state, inputValue: action.payload, light: newLigthArray };
      }
      return state;

    default:
      return state;
  }
};
