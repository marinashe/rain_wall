import React from 'react';
import T from 'prop-types';
import './styles.css';

export const GrassBlock = ({ grassStyle, index, onMouseDown }) => {
  const handleMouseDown = (e) => {
    e.preventDefault();
    onMouseDown(e, index);
  }

  return (
    <div className="grass-block" style={ grassStyle } onMouseDown={ handleMouseDown }/>
  );
};

GrassBlock.propTypes = {
  grassStyle: T.shape({
    width: T.number.isRequired,
    height: T.number.isRequired
  }).isRequired,
  index: T.number.isRequired,
  onMouseDown: T.func.isRequired
};

export default GrassBlock;
