import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profileDataReducer from './profileDataReducer';
import appDataReducer from './appDataReducer';

const rootReducer = combineReducers({
  profileData: profileDataReducer,
  appData: appDataReducer,
  routing: routerReducer
});

export default rootReducer;
