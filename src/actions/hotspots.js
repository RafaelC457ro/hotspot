import {
  ADD_HOTSPOT,
  REMOVE_HOSPOT,
  ADDING_MODE
} from "../constants/hostspots";

export const addHotspot = hostspot => {
  return {
    type: ADD_HOTSPOT,
    hostspot
  };
};

export const removeHotspot = id => {
  return {
    type: REMOVE_HOSPOT,
    id
  };
};
export const activateAddMode = () => {
  return {
    type: ADDING_MODE
  };
};
