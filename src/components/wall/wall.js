import React, { PureComponent } from 'react';
import T from 'prop-types';
import WallBlock from './wall_block';
import './styles.css';

class Wall extends PureComponent {
  static propTypes = {
    wall: T.arrayOf(T.number).isRequired,
    block: T.number.isRequired,
    nextLevel: T.arrayOf(T.number).isRequired,
    water: T.arrayOf(T.number).isRequired,
    additionalWallLength: T.number.isRequired
  }

  renderWallColumn = (blockCount, columnIndex) => {
    const { block } = this.props;
    const blockStyle = {
      width: block,
      height: block
    }

    if (blockCount === 0) {
      blockStyle.height = 0;
      blockStyle.borderTop = 0;
      return (
        <WallBlock
          key={ `wallBlock${ columnIndex }-#` }
          columnIndex={ columnIndex }
          blockStyle={ blockStyle }
        />
      );
    }

    return (
      <div className="wall-column" key={ `column${ columnIndex }` }>
        {
          Array.from(Array(blockCount)).map((nothing, blockIndex) => {
            return (
              <WallBlock
                key={ `wallBlock${ columnIndex }-${ blockIndex }` }
                columnIndex={ columnIndex }
                blockStyle={ blockStyle }
              />
            )
          })
        }
      </div>
    );
  }

  render() {
    const { wall, additionalWallLength } = this.props;

    let newWall = wall;
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
