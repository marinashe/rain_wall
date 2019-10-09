import { combineReducers } from 'redux';
import { createStore } from 'redux';

import wall from './wall';
import drag from './drag';
import rain from './rain';

export default  createStore(combineReducers({
 wall,
 drag,
 rain
}));
