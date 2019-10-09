import createReducer from '../config/createReducer';
import Constants from '../config/constants';


const getDefaultState = () => ({
  rainMode: false
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
  }
});

export default rain;
