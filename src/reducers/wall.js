import createReducer from '../config/createReducer';
import Constants from '../config/constants';

const getDefaultState = () => ({
  wall: [1, 0, 2],
  water: [],
  next_level: [],
  grass: 3,
  block: 20,
  dragMode: false,
  direction: 1, // 1 - to rigth, -1 - to left
  startCoordinates: null
});

const wall = createReducer(getDefaultState(), {
  [Constants.Wall.CREATE_WALL](state, { wall }) {
    if (wall) {
      return {
        ...getDefaultState(),
        wall,
        grass: wall.length
      };
    }
    return {
      ...getDefaultState()
    };
  },
  [Constants.Grass.ADD_GRASS_BLOCK](state, { count }) {
    const grass = state.grass + count;
    return {
      ...state,
      grass
    };
  },
  [Constants.Drag.SET_DRAG_MODE](state, { coordinates, direction }) {
    return {
      ...state,
      dragMode: true,
      direction,
      startCoordinates: coordinates
    };
  },
  [Constants.Drag.UNSET_DRAG_MODE](state) {
    return {
      ...state,
      dragMode: false,
      startCoordinates: null
    };
  },
  [Constants.Drag.SET_COORDINATES](state, { coordinates }) {
    return {
      ...state,
      startCoordinates: coordinates
    };
  },
});

export default wall;
