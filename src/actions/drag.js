import Constants from '../config/constants';

export const setDragMode = (coordinates, direction, columnIndex) => ({
  type: Constants.Drag.SET_DRAG_MODE,
  coordinates,
  direction,
  columnIndex
});

export const unsetDragMode = () => ({
  type: Constants.Drag.UNSET_DRAG_MODE
});
