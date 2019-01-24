import { UPDATE_MASK, HIDE_MASK } from "../constants/mask";

const initialState = {
  visible: false,
  height: 0,
  width: 0,
  x: 0,
  y: 0
};

const mask = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_MASK:
      return Object.assign({}, state, { visible: false });
    case UPDATE_MASK:
      return Object.assign({}, state, { visible: true }, action.mask);
    default:
      return state;
  }
};

export default mask;
