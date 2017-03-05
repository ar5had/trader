import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profileDataReducer from './profileDataReducer';

const rootReducer = combineReducers({
  profileData: profileDataReducer,
  routing: routerReducer
});

export default rootReducer;
