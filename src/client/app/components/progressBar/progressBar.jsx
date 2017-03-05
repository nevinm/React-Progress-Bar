import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './progressBar.scss';
import Bar from '../bar/bar';
import ControlPanel from '../controlPanel/controlPanel';
import * as barActions from '../../redux/actions/barActions';

const { number, shape, array } = PropTypes;

@connect(state => ({
  requiredData: state.progressBarReducer,
}), {
  loadBarData: barActions.loadBarData,
})
export default class ProgressBar extends Component {
  static propTypes = {
    requiredData: shape({
      bars: array,
      buttons: array,
      limit: number,
    }),
  };

  static defaultProps = {
    value: 0,
    onClick: () => {},
    requiredData: {},
  };

  renderBars = () => React.Children.map(this.props.requiredData.bars, (bar, index) =>
    <Bar initialValue={bar} key={index} />);

  render() {
    const { requiredData } = this.props;

    return (
      <div className={styles.progressBarContainer}>
        {this.renderBars()}
        <ControlPanel buttonData={requiredData} />
      </div>
    );
  }
}
