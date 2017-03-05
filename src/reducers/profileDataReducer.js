import { GET_INITIAL_STATE, UPDATE_BASIC_INFO, UPDATE_OTHER_INFO } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function profileDataReducer(state = initialState.profile, action) {
  //let newState;
  switch (action.type) {
    case GET_INITIAL_STATE:
      return objectAssign({}, state);
    case UPDATE_BASIC_INFO:
      break;
    case UPDATE_OTHER_INFO:
      break;
    default:
      return state;
  }
}
