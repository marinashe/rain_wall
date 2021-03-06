import createReducer from '../config/createReducer';
import Constants from '../config/constants';
import { calculateVolumeWater } from '../calculate_volume_water';

const fillArray = (count) => Array(count).fill(0);

const getDefaultState = () => ({
  calculatedWall: [4, 10, 0, 0, 1, 6, 0, 7, 4, 3, 9, 0, 4, 7, 0],
  wall: [4, 10 ,0, 0, 1, 6, 0, 7, 4, 3, 9, 0, 4, 7, 0],
  water: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  nextLevel: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  grass: 15,
  blockSize: Constants.BLOCK_SIZE,
  volumeWater: 0
});

const wall = createReducer(getDefaultState(), {
  [Constants.Wall.CREATE_WALL](state, { wall }) {
    if (wall) {
      const blockCount = wall.length;
      return {
        ...getDefaultState(),
        wall,
        calculatedWall: wall,
        grass: blockCount,
        water: fillArray(blockCount),
        nextLevel: fillArray(blockCount)
      };
    }
    return {
      ...getDefaultState()
    };
  },
  [Constants.Animation.SET_NO_ANIMATION_MODE](state, { wall }) {
    return {
      ...state,
      calculatedWall: wall,
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
      calculatedWall: wall,
      water,
      nextLevel,
      volumeWater: 0
    };
  },
  [Constants.Wall.ADD_WALL_BLOCKS](state, { count, columnIndex }) {
    const wall = [...state.wall];
    wall[columnIndex] = state.wall[columnIndex] + count;
    return {
      ...state,
      wall,
      calculatedWall: wall
    };
  },
  [Constants.Rain.ADD_NEXT_LEVEL](state, { water, nextLevel }) {
    return {
      ...state,
      water,
      nextLevel
    };
  },
  [Constants.Rain.STOP_RAIN](state) {
    const blockCount = state.wall.length;
    const water = fillArray(blockCount);
    const nextLevel = fillArray(blockCount);
    return {
      ...state,
      water,
      nextLevel,
      volumeWater: 0
    };
  },
  [Constants.Wall.CALCULATE_VOLUME_WATER] (state) {
    const volumeWater = calculateVolumeWater(state.calculatedWall);
    return {
      ...state,
      volumeWater
    };
  },
  [Constants.Animation.UNSET_NO_ANIMATION_MODE]() {
    return {
      ...getDefaultState()
    };
  }
});

export default wall;
