import React, { PureComponent } from 'react';
import T from 'prop-types';
import GrassBlock from './grass_block';
import './styles.css';

class Grass extends PureComponent {
  static propTypes = {
    grass: T.number.isRequired,
    blockSize: T.number.isRequired,
    setDragMode: T.func.isRequired,
    additionalBlocks: T.number.isRequired,
    rainMode: T.bool.isRequired
  }
  grassRef = React.createRef()

  getCenterOfGrass = () => {
    const { left, width } = this.grassRef.current.getBoundingClientRect();
    return left + width / 2;
  }

  onMouseDown = (e, columnIndex) => {
    const { setDragMode, rainMode } = this.props;
    if (rainMode) {
      return;
    }
    e.preventDefault();
    const coordinates = { x: e.pageX, y: e.pageY };
    const direction = coordinates.x > this.getCenterOfGrass() ? 1 : -1;
    // 1 - to right, -1 - to left
    setDragMode(coordinates, direction, columnIndex);
  }

  renderGrassBlock = (nothing, index) => {
    const { blockSize } = this.props;
    const grassStyle = {
      width: blockSize,
      height: blockSize
    }
    return (
      <GrassBlock key={ index } index={ index } grassStyle={ grassStyle } onMouseDown={ this.onMouseDown } />
    );
  }

  render() {
    const { grass, additionalBlocks } = this.props;
    const countBlocks = grass + additionalBlocks;
    const styleGrass = additionalBlocks > 0
      ? {
        cursor: 'ew-resize'
      }
      : {};
    return (
      <div ref={ this.grassRef } className="grass-container" style={ styleGrass }>
        {
          Array.from(Array(countBlocks)).map(this.renderGrassBlock)
        }
      </div>
    );
  }
}

export default Grass;
