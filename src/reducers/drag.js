import createReducer from '../config/createReducer';
import Constants from '../config/constants';

const getDefaultState = () => ({
  dragMode: false,
  direction: 0, // 1 - to right, -1 - to left
  startCoordinates: null,
  columnIndex: -1
});

const drag = createReducer(getDefaultState(), {
  [Constants.Drag.SET_DRAG_MODE](state, { coordinates, direction, columnIndex }) {
    return {
      ...state,
      dragMode: true,
      direction,
      columnIndex,
      startCoordinates: coordinates
    };
  },
  [Constants.Drag.UNSET_DRAG_MODE]() {
    return {
      ...getDefaultState()
    };
  }
});

export default drag;
