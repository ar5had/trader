import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profileDataReducer from './profileDataReducer';
import appDataReducer from './appDataReducer';
import myItemsReducer from './myItemsReducer';

const rootReducer = combineReducers({
  profileData: profileDataReducer,
  appData: appDataReducer,
  itemData: myItemsReducer,
  routing: routerReducer
});

export default rootReducer;
