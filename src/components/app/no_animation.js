import React from 'react';
import T from 'prop-types';
import './styles.css';

const TEXT = 'The requested wall is too complex to draw. But you can still calculate it.';

export const NoAnimation = ({ noAnimationMode, unsetNoAnimationMode, calculateVolumeWater }) => {
  if (!noAnimationMode) {
    return null;
  }
  return (
    <div className="app-no-animation">
      <div className="app-no-animation-text">
        { TEXT }
      </div>
      <div>
        <button onClick={ unsetNoAnimationMode } className="app-button-reset">RESET</button>
        <button onClick={ calculateVolumeWater } className="app-button">CALCULATE</button>
      </div>
    </div>
  );
};

NoAnimation.propTypes = {
  noAnimationMode: T.bool.isRequired,
  unsetNoAnimationMode: T.func.isRequired,
  calculateVolumeWater: T.func.isRequired
};

export default NoAnimation;
