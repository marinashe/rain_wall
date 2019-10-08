import React, { PureComponent } from 'react';
import T from 'prop-types';
import './styles.css';
import ConnectedGrass from '../grass';
import ConnectedWall from '../wall';

const difference = (a, b) => Math.abs(a - b);

class Main extends PureComponent {
  static propTypes = {
    dragMode: T.bool.isRequired,
    startCoordinates: T.shape({
      x: T.number,
      y: T.number
    }),
    unsetDragMode: T.func.isRequired,
    addGrassBlocks: T.func.isRequired,
    block: T.number.isRequired,
    grass: T.number.isRequired,
    direction: T.number,
    columnIndex: T.number,
    wall: T.arrayOf(T.number).isRequired,
    addWallBlocks: T.func.isRequired
  }

  state = {
    size: {
      width: 700,
      height: 500
    },
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
    const { grass, block } = this.props;
    const { size: { width } } = this.state;
    if (grass + count >= 3 && (grass + count) * block <= width) {
      this.setState({ additionalGrassBlocks: count });
    }
  }

  setNewWallBlocks = (count) => {
    const { wall, block, columnIndex } = this.props;
    const { size: { height } } = this.state;
    if (wall[columnIndex] + count >= 0 && (wall[columnIndex] + count) * block <= height - 100) {
      this.setState({ additionalWallBlocks: count });
    }
  }

  onMouseMove = (e) => {
    const {
      dragMode
    } = this.props;
    e.preventDefault();
    if (dragMode) {
      const {
        startCoordinates: { x: startX, y: startY },
        block,
        direction
      } = this.props;
      const current = { x: e.pageX, y: e.pageY };
      const movingAxis = this.getMovingAxis(current);
      if (movingAxis === 'X') {
        const additionalBlocks = Math.round(2 * direction * (current.x - startX) / block);
        this.setNewGrassBlocks(additionalBlocks);
        this.setNewWallBlocks(0);
      }

      if (movingAxis === 'Y') {
        const additionalBlocks = Math.round((startY - current.y) / block);
        this.setNewWallBlocks(additionalBlocks);
        this.setNewGrassBlocks(0);
      }

    }
  }

  onMouseUp = (e) => {
    const { dragMode, unsetDragMode, columnIndex } = this.props;
    e.preventDefault();
    if (dragMode) {
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
  }

  onMouseLeave = (e) => {
    const { dragMode, unsetDragMode } = this.props;
    if (dragMode) {
      unsetDragMode();
      this.setNewGrassBlocks(0);
      this.setNewWallBlocks(0);
    }
  }

  render() {
    const { additionalGrassBlocks, size, additionalWallBlocks } = this.state;
    return (
      <div
        className="main-container"
        style={ size }
        onMouseMove={ this.onMouseMove }
        onMouseUp={ this.onMouseUp }
        onMouseLeave={ this.onMouseLeave}
      >
        <ConnectedGrass
          additionalBlocks={ additionalGrassBlocks }
        />
        <ConnectedWall
          additionalWallLength={ additionalGrassBlocks }
          additionalWallBlocks={ additionalWallBlocks }
        />
      </div>
    );
  }
}

export default Main;
