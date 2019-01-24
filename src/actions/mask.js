import { UPDATE_MASK, HIDE_MASK } from "../constants/mask";

export const updateMask = mask => {
  return {
    type: UPDATE_MASK,
    mask
  };
};

export const hideMask = mask => {
  return {
    type: HIDE_MASK,
    mask
  };
};
