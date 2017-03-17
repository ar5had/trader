import { GET_INITIAL_TRADES_STATE, UPDATE_TRADE_STATE, UPDATE_TRADEREQUESTS_STATE} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function tradesDataReducer(state = initialState.trades, action) {
  let tradeRequests, item;

  switch (action.type) {
    case GET_INITIAL_TRADES_STATE:
      return objectAssign({}, state, action.payload);
    case UPDATE_TRADE_STATE:
      return objectAssign({}, state, action.payload);
    case UPDATE_TRADEREQUESTS_STATE:
      tradeRequests = state.tradeRequests.filter(elem => {
        item = elem.itemRequests.filter(
          elemItem => elemItem.docId.toString() !== action.payload
        );
        return item.length > 0;
      });
      return objectAssign({}, state, {tradeRequests});
    default:
      return state;
  }
}
