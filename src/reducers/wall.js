import createReducer from '../config/createReducer';
import Constants from '../config/constants';

const getDefaultState = () => ({
  wall: [1, 0, 2],
  water: [],
  nextLevel: [],
  grass: 3,
  block: 30,
  dragMode: false,
  direction: 1, // 1 - to rigth, -1 - to left
  startCoordinates: null,
  columnIndex: -1
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
    let wall = [...state.wall];
    if (count > 0) {
      wall = state.wall.concat(Array(count).fill(0));
    }

    if (count < 0) {
      const newLength = state.wall.length + count;
      wall = state.wall.slice(0, newLength);
    }
    const newState = {
      ...state,
      grass,
      wall
    };
    return newState;
  },
  [Constants.Drag.SET_DRAG_MODE](state, { coordinates, direction, columnIndex }) {
    return {
      ...state,
      dragMode: true,
      direction,
      columnIndex,
      startCoordinates: coordinates
    };
  },
  [Constants.Drag.UNSET_DRAG_MODE](state) {
    return {
      ...state,
      dragMode: false,
      startCoordinates: null,
      columnIndex: -1
    };
  },
  [Constants.Wall.ADD_WALL_BLOCKS](state, { count, columnIndex }) {
    const wall = [...state.wall];
    wall[columnIndex] = state.wall[columnIndex] + count;
    return {
      ...state,
      wall
    };
  }
});

export default wall;
