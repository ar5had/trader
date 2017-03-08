import * as types from '../constants/actionTypes';
import fetch from 'unfetch';

export function getInitalProfileState() {
  return (dispatch) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          return dispatch(
            {
              type: types.GET_INITIAL_PROFILE_STATE,
              payload: JSON.parse(this.responseText)
            }
          );
        }
    };
    xhttp.open("GET", "http://localhost:8080/getProfileData", true);
    xhttp.send();
    // fetch('/getProfileData')
    // .then(response => response.json())
    // .then(profileData => dispatch(
    //   {
    //     type: types.GET_INITIAL_PROFILE_STATE,
    //     payload: profileData
    //   }
    // ));
  };
}

export function updateProfileInfo(changedInfo) {
  return {
    type: types.UPDATE_PROFILE_INFO,
    payload: changedInfo
  };
}
