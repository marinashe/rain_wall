import Constants from '../config/constants';

export const addGrassBlocks = (count) => ({
  type: Constants.Grass.ADD_GRASS_BLOCK,
  count
});
