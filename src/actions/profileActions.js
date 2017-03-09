import * as types from '../constants/actionTypes';
import fetch from 'unfetch';

export function getInitalProfileState() {
  return (dispatch) => {
    fetch('/api/getProfileData', {
      method: 'GET',
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
        type: types.GET_INITIAL_PROFILE_STATE,
        payload: profileData
      }
    ))
    .catch(err => {
      /* eslint-disable no-console */
      console.error(`Got error:${err} while dispatching GET_INITIAL_PROFILE_STATE!`);
    });
  };
}

export function updateProfileInfo(changedInfo, editSection) {
  return (dispatch) => {
    fetch(`/api/setProfileData?edit=${editSection}`, {
      method: 'POST',
      body: JSON.stringify(changedInfo),
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
        type: types.UPDATE_PROFILE_INFO,
        payload: profileData
      }
    ))
    .catch(err => {
      /* eslint-disable no-console */
      console.error(`Got error:${err} while dispatching UPDATE_PROFILE_INFO!`);
    });
  };
}
