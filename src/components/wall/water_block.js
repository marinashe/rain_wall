import React from 'react';
import T from 'prop-types';
import './styles.css';

export const WaterBlock = ({ blockStyle }) => {
  return (
    <div className="water-block" style={ blockStyle }>
      <div className="fill">
        <svg>
          <path
            id="waveShape"
            d="M 60.059343,78.359519 V 0.75034655 c 0,0 -0.120119,-0.026086 -0.220217,-0.026086 0,0 -5.105044,-0.60000334 -8.108011,-0.62609128 -3.002968,0 -8.128032,0.62609128 -8.128032,0.62609128 C 41.14065,1.0112204 37.53709,1.1938291 37.216774,1.219917 36.816378,1.1938314 33.272877,1.0112204 30.810443,0.72426085 c 0,0 -5.165103,-0.60000334 -8.168071,-0.62609013 -3.002967,0 -8.16807,0.62609013 -8.16807,0.62609013 C 12.011869,1.0112204 8.388288,1.1938302 8.0679717,1.219917 7.6675761,1.1938314 4.0640155,1.0112204 1.6216022,0.72426205 c 0,0 -0.6206131,-0.078257 -1.621602235344366,-0.18261002 V 78.359521 Z"
            fill="#04acff"
           />
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
