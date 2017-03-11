import * as types from '../constants/actionTypes';
import fetch from 'unfetch';

// export function getInitalProfileState(cb) {
//   return (dispatch) => {
//     fetch('/api/getProfileData', {
//       method: 'GET',
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
//     .then(profileData => {
//       dispatch(
//         {
//           type: types.GET_INITIAL_PROFILE_STATE,
//           payload: profileData
//         }
//       );
//       cb();
//     })
//     .catch(err => {
//       /* eslint-disable no-console */
//       console.error(`Got error:${err} while dispatching GET_INITIAL_PROFILE_STATE!`);
//       cb();
//     });
//   };
// }

export function updateProfileState(changedState, editSection) {
  return (dispatch) => {
    fetch(`/api/setProfileData?edit=${editSection}`, {
      method: 'POST',
      body: JSON.stringify(changedState),
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
    .then(profileData => dispatch(
      {
        type: types.UPDATE_PROFILE_STATE,
        payload: profileData
      }
    ))
    .catch(err => {
      /* eslint-disable no-console */
      console.error(`Got error:${err} while dispatching UPDATE_PROFILE_INFO!`);
    });
  };
}
