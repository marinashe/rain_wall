import { combineReducers } from 'redux';
import { createStore } from 'redux';

import wall from './wall';
import drag from './drag';

export default  createStore(combineReducers({
 wall,
 drag
}));
