import createReducer from '../config/createReducer';
import Constants from '../config/constants';

const fillArray = (count) => Array(count).fill(0);

const getDefaultState = () => ({
  wall: [1, 0, 2],
  water: [0, 0, 0],
  nextLevel: [0, 0, 0],
  grass: Constants.MIN_WALL_LENGTH,
  blockSize: Constants.BLOCK_SIZE
});

const wall = createReducer(getDefaultState(), {
  [Constants.Wall.CREATE_WALL](state, { wall }) {
    if (wall) {
      const blockCount = wall.length;
      return {
        ...getDefaultState(),
        wall,
        grass: blockCount,
        water: fillArray(blockCount),
        nextLevel: fillArray(blockCount)
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
      wall = state.wall.concat(fillArray(count));
    }

    if (count < 0) {
      const newLength = state.wall.length + count;
      wall = state.wall.slice(0, newLength);
    }
    const blockCount = wall.length;
    const water = fillArray(blockCount);
    const nextLevel = fillArray(blockCount);

    return  {
      ...state,
      grass,
      wall,
      water,
      nextLevel
    };
  },
  [Constants.Wall.ADD_WALL_BLOCKS](state, { count, columnIndex }) {
    const wall = [...state.wall];
    wall[columnIndex] = state.wall[columnIndex] + count;
    const blockCount = wall.length;
    const water = fillArray(blockCount);
    const nextLevel = fillArray(blockCount);
    return {
      ...state,
      wall,
      water,
      nextLevel
    };
  }
});

export default wall;
