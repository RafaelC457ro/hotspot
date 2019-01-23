import { ADD_HOTSPOT, REMOVE_HOSPOT } from "../constants/hostspots";

const hostspots = (state = [], action) => {
  switch (action.type) {
    case ADD_HOTSPOT:
      return [...state, action.hotspot];
    case REMOVE_HOSPOT:
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
};

export default hostspots;
