import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_BAR_DATA_SUCCESS:
      return { ...state.progressBarReducer, ...action.data.data };

    case types.UPDATE_BAR_DATA_SUCCESS: {
      const buttonInfo = action.buttonInfo;
      const selectedBar = parseInt(buttonInfo.selectedBar, 0);
      const initialBarValue = state.bars[selectedBar];
      const updatedBarValue = (initialBarValue + buttonInfo.valueToBeUpdated);
      const updatedBarValueNegativeCheck = updatedBarValue > 0 ? updatedBarValue : 0;

      return {
        ...state,
        bars: state.bars.map((bar, i) => {
          if (i === selectedBar) {
            return updatedBarValueNegativeCheck;
          }

          return bar;
        }),
      };
    }

    default:
      return state;
  }
}
