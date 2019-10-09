import React from 'react';
import T from 'prop-types';
import './styles.css';

export const WaterBlock = ({ blockStyle }) => {
  return (
    <div className="water-block" style={ blockStyle }>
      <div className="fill">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60px"
          height="60px"
          viewBox="0 0 60 60"
          enableBackground="new 0 0 60 60"
        >
          <path fill="#04ACFF" id="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"/>
        </svg>
      </div>
    </div>
  );
};

WaterBlock.propTypes = {
  blockStyle: T.shape({
    width: T.number.isRequired,
    height: T.number.isRequired
  }).isRequired
};

export default WaterBlock;
