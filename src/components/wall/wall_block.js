import React from 'react';
import T from 'prop-types';
import './styles.css';

export const WallBlock = ({ blockStyle, columnIndex, onMouseDown }) => {
  const handleMouseDown = (e) => {
    onMouseDown(e, columnIndex);
  }
  return (
    <div className="wall-block" style={ blockStyle } onMouseDown={ handleMouseDown } />
  );
};

WallBlock.propTypes = {
  blockStyle: T.shape({
    width: T.number.isRequired,
    height: T.number.isRequired
  }).isRequired,
  columnIndex: T.number.isRequired,
  onMouseDown: T.func.isRequired
};

export default WallBlock;
