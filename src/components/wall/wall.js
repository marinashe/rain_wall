import React, { PureComponent } from 'react';
import T from 'prop-types';
import WallBlock from './wall_block';
import './styles.css';

class Wall extends PureComponent {
  static propTypes = {
    wall: T.arrayOf(T.number).isRequired,
    blockSize: T.number.isRequired,
    nextLevel: T.arrayOf(T.number).isRequired,
    water: T.arrayOf(T.number).isRequired,
    additionalWallLength: T.number.isRequired,
    additionalWallBlocks: T.number.isRequired,
    columnIndex: T.number.isRequired,
    setDragMode: T.func.isRequired,
    rainMode: T.bool.isRequired
  }

  onMouseDown = (e, columnIndex) => {
    const { setDragMode, rainMode } = this.props;
    if (rainMode) {
      return;
    }
    e.preventDefault();
    const coordinates = { x: e.pageX, y: e.pageY };
    setDragMode(coordinates, 1, columnIndex);
  }

  renderWallColumn = (blockCount, columnIndex) => {
    const { blockSize, columnIndex: raisedColumnIndex, additionalWallBlocks } = this.props;
    const blockStyle = {
      width: blockSize,
      height: blockSize
    }

    const newBlockCount = columnIndex === raisedColumnIndex
      ? blockCount + additionalWallBlocks
      : blockCount;

    if (newBlockCount === 0) {
      blockStyle.height = 0;
      blockStyle.borderTop = 0;
      return (
        <WallBlock
          key={ `wallBlock${ columnIndex }-#` }
          columnIndex={ columnIndex }
          blockStyle={ blockStyle }
          onMouseDown={ this.onMouseDown }
        />
      );
    }
    return (
      <div className="wall-column" key={ `column${ columnIndex }` }>
        {
          Array.from(Array(newBlockCount)).map((nothing, blockIndex) => {
            return (
              <WallBlock
                key={ `wallBlock${ columnIndex }-${ blockIndex }` }
                columnIndex={ columnIndex }
                blockStyle={ blockStyle }
                onMouseDown={ this.onMouseDown }
              />
            )
          })
        }
      </div>
    );
  }

  render() {
    const { wall, additionalWallLength } = this.props;
    let newWall = [...wall];
    if (additionalWallLength > 0) {
      newWall = wall.concat(Array(additionalWallLength).fill(0));
    }

    if (additionalWallLength < 0) {
      const newLength = wall.length - Math.abs(additionalWallLength);
      newWall = wall.slice(0, Math.abs(newLength));
    }

    return (
      <div ref={ this.grassRef } className="wall-container">
        {
          newWall.map(this.renderWallColumn)
        }
      </div>
    );
  }
}

export default Wall;
