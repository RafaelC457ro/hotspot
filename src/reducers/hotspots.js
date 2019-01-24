import {
  ADD_HOTSPOT,
  REMOVE_HOSPOT,
  ADDING_MODE
} from "../constants/hostspots";

const initialState = {
  isAddingMode: false,
  items: []
};

const hostspots = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_MODE:
      return Object.assign({}, state, {
        isAddingMode: true
      });
    case ADD_HOTSPOT:
      return {
        isAddingMode: false,
        items: [
          ...state.items,
          Object.assign({}, action.hostspot, { id: state.items.length + 1 })
        ]
      };
    case REMOVE_HOSPOT:
      return Object.assign({}, state, {
        items: state.items.filter(({ id }) => id !== action.id)
      });
    default:
      return state;
  }
};

export default hostspots;
