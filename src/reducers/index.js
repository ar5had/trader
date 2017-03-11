import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profileDataReducer from './profileDataReducer';
import appDataReducer from './appDataReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  profileData: profileDataReducer,
  appData: appDataReducer,
  itemData: itemReducer,
  routing: routerReducer
});

export default rootReducer;
