import Constants from '../config/constants';

export const startRain = () => ({
  type: Constants.Rain.START_RAIN
});

export const stopRain = () => ({
  type: Constants.Rain.STOP_RAIN
});
