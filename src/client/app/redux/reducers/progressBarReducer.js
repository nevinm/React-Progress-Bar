import * as types from '../actions/actionTypes';

const initialState = {
  bars: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_BAR_DATA_SUCCESS:
      return action.bars;

    default:
      return state;
  }
}
