import {
  ADD_HOTSPOT,
  REMOVE_HOSPOT,
  ADDING_MODE,
  CHANGE_TITLE,
  CHANGE_DESCRIPTION,
  CLOSE_ALL,
  OPEN_EDIT
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

export const updateTitle = (id, title) => {
  return {
    type: CHANGE_TITLE,
    item: {
      id,
      title
    }
  };
};

export const updateDescription = (id, description) => {
  return {
    type: CHANGE_DESCRIPTION,
    item: {
      id,
      description
    }
  };
};

export const closeAllPoppers = () => {
  return {
    type: CLOSE_ALL
  };
};

export const openEdit = id => {
  return {
    type: OPEN_EDIT,
    item: {
      id
    }
  };
};
