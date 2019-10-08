import Constants from '../config/constants';

export const setDragMode = (coordinates, direction) => ({
  type: Constants.Drag.SET_DRAG_MODE,
  coordinates,
  direction
});

export const unsetDragMode = () => ({
  type: Constants.Drag.UNSET_DRAG_MODE
});

export const setCoordinates = (coordinates) => ({
  type: Constants.Drag.SET_COORDINATES,
  coordinates
});
