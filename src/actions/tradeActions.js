import * as types from '../constants/actionTypes';
import fetch from 'unfetch';
import objectAssign from 'object-assign';

export function acceptTrade(data) {
  return (dispatch) => {
    fetch('/api/addItem', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.status >= 400) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .then(data => {
      dispatch(
        {
          type: types.ACCEPT_TRADE_REQ,
          payload: data
        }
      );
    })
    .catch(err => {
      /* eslint-disable no-console */
      console.error(`Got error:${err} while dispatching ACCEPT_TRADE_REQ!`);
    });
  };
}

export function declineTradeReq(key, docId, node) {
  return (dispatch) => {
    fetch('/api/declinerequest', {
      method: 'POST',
      body: JSON.stringify({key, docId}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.status >= 400) {
        throw new Error(response);
      } else {
        objectAssign(node.style, { opacity: "0", marginBottom: `-${node.offsetHeight + 14}px`, zIndex: '-22' });
        setTimeout(() => {
          dispatch({
              type: types.UPDATE_TRADEREQUESTS_STATE,
              payload: docId
            });
        }, 1000);
      }
    })
    .catch(err => {
      /* eslint-disable no-console */
      console.error(`Got error:${err} while dispatching DECLINE_TRADE_REQ!`);
    });
  };
}

export function cancelTradeProposed(id, node) {
  return (dispatch) => {
    fetch(`/api/removeitemrequest`, {
      method: 'POST',
      body: JSON.stringify({id}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.status >= 400) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .then(data => {
      objectAssign(node.style, { opacity: "0", marginBottom: `-${node.offsetHeight + 14}px`, zIndex: '-22' });
      setTimeout(() => {
        dispatch({
            type: types.UPDATE_TRADE_STATE,
            payload: data
          });
      }, 1000);
    })
    .catch(err => {
      /* eslint-disable no-console */
      console.error(`Got error:${err} while dispatching CANCEL_TRADE_REQ!`);
    });
  };
}
