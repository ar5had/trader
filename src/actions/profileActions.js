import * as types from '../constants/actionTypes';

export function getInitalProfileState() {
  return (dispatch) => {

    return dispatch({
      type: types.GET_INITIAL_PROFILE_STATE,
      payload: profileData
    });
  };
}

export function updateProfileInfo(changedInfo) {
  return {
    type: types.UPDATE_PROFILE_INFO,
    payload: changedInfo
  };
}
