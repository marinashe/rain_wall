import React from 'react';
import T from 'prop-types';
import './styles.css';

export const WallBlock = ({ blockStyle, columnIndex}) => {

  return (
    <div className="wall-block" style={ blockStyle } />
  );
};

WallBlock.propTypes = {
  blockStyle: T.shape({
    width: T.number.isRequired,
    height: T.number.isRequired
  }).isRequired,
  columnIndex: T.number.isRequired,
};

export default WallBlock;
