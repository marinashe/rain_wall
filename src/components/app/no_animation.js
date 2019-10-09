import React from 'react';
import T from 'prop-types';
import './styles.css';

export const NoAnimation = ({ noAnimationMode, unsetNoAnimationMode, calculateVolumeWater }) => {
  if (!noAnimationMode) {
    return null;
  }
  return (
    <div className="app-no-animation">
      <div>
        hdsjafg hfejfhjdsh hdjfhdsjk hsjadfhjsd sgjadfgjhsd sghafgjhdsg fdghsfgjds
      </div>
      <div>
        <button onClick={ unsetNoAnimationMode } className="button-reset">RESET</button>
        <button onClick={ calculateVolumeWater } className="button">CALCULATE</button>
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
