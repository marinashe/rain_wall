import createReducer from '../config/createReducer';
import Constants from '../config/constants';


const getDefaultState = () => ({
  rainMode: false,
  noAnimationMode: false
});

const rain = createReducer(getDefaultState(), {
  [Constants.Rain.START_RAIN](state) {
    return {
      ...state,
      rainMode: true,
    };
  },
  [Constants.Rain.STOP_RAIN]() {
    return {
      ...getDefaultState()
    };
  },
  [Constants.Animation.SET_NO_ANIMATION_MODE](state) {
    return {
      ...state,
      noAnimationMode: true
    };
  },
  [Constants.Animation.UNSET_NO_ANIMATION_MODE]() {
    return {
      ...getDefaultState()
    };
  }
});

export default rain;
