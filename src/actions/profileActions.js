import * as types from '../constants/actionTypes';

// export function getInitalProfileState() {
//   return function (dispatch) {
//     return dispatch({
//       type: types.GET_INITIAL_STATE

//     });
//   };
// }

export function updateProfileInfo(changedInfo) {
  return {
    type: types.UPDATE_PROFILE_INFO,
    payload: changedInfo
  }
}
