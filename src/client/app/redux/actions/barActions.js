import * as types from './actionTypes';
import barsApi from '../api/bars';

export function loadBarData() {
  return function(dispatch) {
    return barsApi.getBars(data).then()
  }
}
