const Constants = {
  BLOCK_SIZE: 30,
  MAX_WALL_LENGTH: 23,
  MIN_WALL_LENGTH: 3,
  MAX_WALL_HEIGHT: 14,
  Wall: {
    CREATE_WALL: 'create:new:wall',
    ADD_WALL_BLOCKS: 'add:wall:blocks',
    CALCULATE_VOLUME_WATER: 'calculate:volume:water'
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
    STOP_RAIN: 'stop:rain',
    ADD_NEXT_LEVEL: 'add:next:level'
  },
  Animation: {
    SET_NO_ANIMATION_MODE: 'set:no:animation:mode',
    UNSET_NO_ANIMATION_MODE: 'unset:no:animation:mode'
  }
};

export default Constants;
