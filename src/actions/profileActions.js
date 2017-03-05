import * as types from '../constants/actionTypes';

export function updateBasicInfo() {
  return function (dispatch) {
    return dispatch({
      type: types.UPDATE_BASIC_INFO
    });
  };
}
