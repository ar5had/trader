import { ADD_ITEM } from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [action.payload, ...state];
    default:
      return state;
  }
}
