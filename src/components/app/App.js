import React, { PureComponent } from 'react';
import T from 'prop-types';
import Constants from '../../config/constants';
import ConnectedGrass from '../grass';
import ConnectedWall from '../wall';
import ConnectedCloud from '../cloud';
import TextualWall from '../textual_wall';
import NoAnimation from './no_animation';

import './styles.css';

const difference = (a, b) => Math.abs(a - b);
const SIZE = {
  width: 700,
  height: 600
};

class App extends PureComponent {
  static propTypes = {
    dragMode: T.bool.isRequired,
    startCoordinates: T.shape({
      x: T.number,
      y: T.number
    }),
    unsetDragMode: T.func.isRequired,
    addGrassBlocks: T.func.isRequired,
    blockSize: T.number.isRequired,
    grass: T.number.isRequired,
    direction: T.number,
    columnIndex: T.number,
    wall: T.arrayOf(T.number).isRequired,
    addWallBlocks: T.func.isRequired,
    rainMode: T.bool.isRequired,
    noAnimationMode: T.bool.isRequired,
    unsetNoAnimationMode: T.func.isRequired,
    calculateVolumeWater: T.func.isRequired
  }

  state = {
    additionalGrassBlocks: 0,
    additionalWallBlocks: 0
  }

  getMovingAxis = (current) => {
    const { startCoordinates }  = this.props;
    const diffX = difference(startCoordinates.x, current.x);
    const diffY = difference(startCoordinates.y, current.y);
    if (diffX >= diffY) {
      return 'X';
    }
    return 'Y';
  }


  setNewGrassBlocks = (count) => {
    const { grass } = this.props;
    if (grass + count >= Constants.MIN_WALL_LENGTH && grass + count<= Constants.MAX_WALL_LENGTH) {
      this.setState({ additionalGrassBlocks: count });
    }
  }

  setNewWallBlocks = (count) => {
    const { wall, columnIndex } = this.props;
    if (wall[columnIndex] + count >= 0 && wall[columnIndex] + count <= Constants.MAX_WALL_HEIGHT) {
      this.setState({ additionalWallBlocks: count });
    }
  }

  onMouseMove = (e) => {
    const { dragMode } = this.props;

    if (!dragMode) {
      return;
    }

    e.preventDefault();
    const {
      startCoordinates: { x: startX, y: startY },
      blockSize,
      direction
    } = this.props;
    const current = { x: e.pageX, y: e.pageY };
    const movingAxis = this.getMovingAxis(current);
    if (movingAxis === 'X') {
      const additionalBlocks = Math.round(2 * direction * (current.x - startX) / blockSize);
      this.setNewGrassBlocks(additionalBlocks);
      this.setNewWallBlocks(0);
    }

    if (movingAxis === 'Y') {
      const additionalBlocks = Math.round((startY - current.y) / blockSize);
      this.setNewWallBlocks(additionalBlocks);
      this.setNewGrassBlocks(0);
    }
  }

  onMouseUp = (e) => {
    const { dragMode, unsetDragMode, columnIndex } = this.props;
    if (!dragMode) {
      return;
    }

    e.preventDefault();
    const { addGrassBlocks, addWallBlocks } = this.props;
    const { additionalGrassBlocks, additionalWallBlocks }  = this.state;
    unsetDragMode();
    if (additionalGrassBlocks) {
      addGrassBlocks(additionalGrassBlocks);
    }
    if (additionalWallBlocks) {
      addWallBlocks(additionalWallBlocks, columnIndex);
    }
    this.setNewGrassBlocks(0);
    this.setNewWallBlocks(0);
  }

  onMouseLeave = (e) => {
    const { dragMode, unsetDragMode } = this.props;
    if (!dragMode) {
      return;
    }
    unsetDragMode();
    this.setNewGrassBlocks(0);
    this.setNewWallBlocks(0);
  }

  render() {
    const {
      rainMode,
      noAnimationMode,
      unsetNoAnimationMode,
      calculateVolumeWater
    } = this.props;
    const {
      additionalGrassBlocks,
      additionalWallBlocks
    } = this.state;

    const mainStyle = {
      ...SIZE,
      backgroundColor: rainMode ? 'lightblue' : 'white'
    }

    return (
      <div
        className="app-container"
        onMouseMove={ this.onMouseMove }
        onMouseUp={ this.onMouseUp }
        onMouseLeave={ this.onMouseLeave }
      >
        <div
          className="app-main"
          style={ mainStyle }
        >
          <ConnectedCloud />
          <div className="app-wall">
            <ConnectedWall
              additionalWallLength={ additionalGrassBlocks }
              additionalWallBlocks={ additionalWallBlocks }
            />
            <ConnectedGrass
              additionalBlocks={ additionalGrassBlocks }
            />
          </div>
          <NoAnimation
            noAnimationMode={ noAnimationMode }
            unsetNoAnimationMode={ unsetNoAnimationMode }
            calculateVolumeWater={ calculateVolumeWater }
          />
        </div>
        <TextualWall />
      </div>
    );
  }
}

export default App;
