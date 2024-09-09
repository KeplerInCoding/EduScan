import { combineReducers } from 'redux';
import { tableReducer } from './tableReducer';
import { uploadReducer } from './uploadReducer';

export const rootReducer = combineReducers({
  table: tableReducer,
  upload: uploadReducer,
});