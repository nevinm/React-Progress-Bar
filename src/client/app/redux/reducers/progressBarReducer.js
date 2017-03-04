import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_BAR_DATA_SUCCESS:
      return { ...state.progressBarReducer, ...action.data.data };

    default:
      return state;
  }
}
