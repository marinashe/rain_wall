import React, { PureComponent } from 'react';
import T from 'prop-types';
import GrassBlock from './grass_block';
import './styles.css';

class Grass extends PureComponent {
  static propTypes = {
    grass: T.number.isRequired,
    block: T.number.isRequired,
    setDragMode: T.func.isRequired,
    additionalBlocks: T.number.isRequired,
  }
  grassRef = React.createRef()

  getCenterOfGrass = () => {
    const { left, width } = this.grassRef.current.getBoundingClientRect();
    return left + width / 2;
  }

  onMouseDown = (e, columnIndex) => {
    const { setDragMode } = this.props;
    const coordinates = { x: e.pageX, y: e.pageY };
    const direction = coordinates.x > this.getCenterOfGrass() ? 1 : -1;
    // 1 - to rigth, -1 - to left
    setDragMode(coordinates, direction, columnIndex);
  }

  renderGrassBlock = (nothing, index) => {
    const { block } = this.props;
    const grassStyle = {
      width: block,
      height: block
    }
    return (
      <GrassBlock key={ index } index={ index } grassStyle={ grassStyle } onMouseDown={ this.onMouseDown } />
    );
  }

  render() {
    const { grass, additionalBlocks } = this.props;
    const countBlocks = grass + additionalBlocks;
    return (
      <div ref={ this.grassRef } className="grass-container">
        {
          Array.from(Array(countBlocks)).map(this.renderGrassBlock)
        }
      </div>
    );
  }
}

export default Grass;
