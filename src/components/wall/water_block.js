import React from 'react';
import T from 'prop-types';
import './styles.css';

export const WaterBlock = ({ blockStyle }) => {
  return (
    <div className="water-block" style={ blockStyle } />
  );
};

WaterBlock.propTypes = {
  blockStyle: T.shape({
    width: T.number.isRequired,
    height: T.number.isRequired
  }).isRequired
};

export default WaterBlock;
