import * as types from '../constants/actionTypes';
import fetch from 'unfetch';

export function getInitalProfileState() {
  return (dispatch) => {
    fetch('/getProfileData', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      credentials: 'include'
    })
    .then(response => response.json())
    .then(profileData => dispatch(
      {
        type: types.GET_INITIAL_PROFILE_STATE,
        payload: profileData
      }
    ));
  };
}

export function updateProfileInfo(changedInfo) {
  return {
    type: types.UPDATE_PROFILE_INFO,
    payload: changedInfo
  };
}
