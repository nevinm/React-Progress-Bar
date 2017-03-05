import * as types from './actionTypes';
import barsApi from '../api/bars';

export function loadBarDataSuccess(bars) {
  return { type: types.LOAD_BAR_DATA_SUCCESS, data: bars };
}

export function loadBarData() {
  return function (dispatch) {
    return barsApi.getBars().then((bars) => {
      dispatch(loadBarDataSuccess(bars));
    })
    .catch((err) => {
      throw (err);
    });
  };
}

export function updateBarData(buttonInfo) {
  return { type: types.UPDATE_BAR_DATA_SUCCESS, buttonInfo };
}
