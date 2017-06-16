import {combineReducers} from 'redux';
import testReducer from './test_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  test: testReducer
});

export default rootReducer;
