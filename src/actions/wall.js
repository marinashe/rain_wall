import Constants from '../config/constants';

export const addWallBlocks = (count, columnIndex) => ({
  type: Constants.Wall.ADD_WALL_BLOCKS,
  count,
  columnIndex
});

export const createWall = (wall) => ({
  type: Constants.Wall.CREATE_WALL,
  wall
});

export const calculateVolumeWater = () => ({
  type: Constants.Wall.CALCULATE_VOLUME_WATER
});
