import * as types from '../constants/actionTypes';
import fetch from 'unfetch';

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

export function declineTradeReq(data) {
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
          type: types.DECLINE_TRADE_REQ,
          payload: data
        }
      );
    })
    .catch(err => {
      /* eslint-disable no-console */
      console.error(`Got error:${err} while dispatching DECLINE_TRADE_REQ!`);
    });
  };
}

// export function requestItemTrade(data) {
//   return (dispatch) => {
//     fetch('/api/addItem', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Cache': 'no-cache'
//       },
//       credentials: 'same-origin'
//     })
//     .then(response => {
//       if (response.status >= 400) {
//         throw new Error(response);
//       } else {
//         return response.json();
//       }
//     })
//     .then(data => {
//       dispatch(
//         {
//           type: types.ACCEPT_TRADE_REQ,
//           payload: data
//         }
//       );
//     })
//     .catch(err => {
//       /* eslint-disable no-console */
//       console.error(`Got error:${err} while dispatching ACCEPT_TRADE_REQ!`);
//     });
//   };
// }

export function cancelTradeProposed(data) {
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
          type: types.CANCEL_TRADE_PROPOSED,
          payload: data
        }
      );
    })
    .catch(err => {
      /* eslint-disable no-console */
      console.error(`Got error:${err} while dispatching CANCEL_TRADE_REQ!`);
    });
  };
}
