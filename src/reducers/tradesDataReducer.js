import { GET_INITIAL_TRADES_STATE } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function tradesDataReducer(state = initialState.trades, action) {
  switch (action.type) {
    case GET_INITIAL_TRADES_STATE:
      return objectAssign({}, state, action.payload);
    default:
      return state;
  }
}
