const Constants = {
  BLOCK_SIZE: 30,
  MAX_WALL_LENGTH: 25,
  MIN_WALL_LENGTH: 3,
  MAX_WALL_HEIGHT: 14,
  Wall: {
    CREATE_WALL: 'create:new:wall',
    ADD_WALL_BLOCKS: 'add:wall:blocks'
  },
  Grass: {
    ADD_GRASS_BLOCK: 'add:grass:block'
  },
  Drag: {
    SET_DRAG_MODE: 'set:drag:mode',
    UNSET_DRAG_MODE: 'unset:drag:mode'
  },
  Rain: {
    START_RAIN: 'start:rain',
    STOP_RAIN: 'stop:rain'
  }
};

export default Constants;
