import React, { PureComponent } from 'react';
import T from 'prop-types';
import './styles.css';
import ConnectedGrass from '../grass';
import ConnectedWall from '../wall';

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
    columnIndex: T.number
  }

  state = {
    size: {
      width: 700,
      height: 500
    },
    additionalGrassBlocks: 0
  }


  setNewGrassBlocks = (count) => {
    const { grass, block } = this.props;
    const { size: { width } } = this.state;
    if (grass + count >= 3 && (grass + count) * block <= width) {
      this.setState({ additionalGrassBlocks: count });
    }

  }

  onMouseMove = (e) => {
    const {
      dragMode
    } = this.props;
    e.preventDefault();
    if (dragMode) {
      const {
        startCoordinates: { x: startX },
        block,
        direction
      } = this.props;
      const current = { x: e.pageX, y: e.pageY };
      const additionalBlocks = Math.round(2 * direction * (current.x - startX) / block);
      this.setNewGrassBlocks(additionalBlocks);
    }
  }

  onMouseUp = (e) => {
    const { dragMode, unsetDragMode } = this.props;
    e.preventDefault();
    if (dragMode) {
      const { addGrassBlocks } = this.props;
      const { additionalGrassBlocks }  = this.state;
      unsetDragMode();
      this.setNewGrassBlocks(0);
      addGrassBlocks(additionalGrassBlocks);

    }
  }

  onMouseLeave = (e) => {
    const { dragMode, unsetDragMode } = this.props;
    if (dragMode) {
      unsetDragMode();
      this.setNewGrassBlocks(0);
    }
  }

  render() {
    const { additionalGrassBlocks, size } = this.state;
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
        />
      </div>
    );
  }
}

export default Main;