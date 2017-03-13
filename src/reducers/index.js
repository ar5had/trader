import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profileDataReducer from './profileDataReducer';
import appDataReducer from './appDataReducer';
import myItemsReducer from './myItemsReducer';
import allItemsReducer from './allItemsReducer';
import individualItemReducer from './individualItemReducer';

const rootReducer = combineReducers({
  profileData: profileDataReducer,
  appData: appDataReducer,
  myItemsData: myItemsReducer,
  allItemsData: allItemsReducer,
  individualItemData: individualItemReducer,
  routing: routerReducer
});

export default rootReducer;
