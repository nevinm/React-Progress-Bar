import React, { PropTypes, Component } from 'react';
import styles from './progressBar.scss';
import Bars from '../bars/bars';
import ControlPanel from '../controlPanel/controlPanel';

const { number, func } = PropTypes;
const dummyData = {
  buttons: [
    10,
    38,
    -13,
    -18,
  ],
  bars: [
    620,
    45,
    87,
  ],
  limit: 230,
};

export default class ProgressBar extends Component {
  static propTypes = {
    value: number,
    onClick: func,
  };

  static defaultProps = {
    value: 0,
    onClick: () => {},
  };

  renderBars = () => React.Children.map(dummyData.bars, (bar, index) =>
    <Bars initialValue={bar} key={index} />);

  render() {
    return (
      <div className={styles.progressBarContainer}>
        {this.renderBars()}
        <ControlPanel buttonData={dummyData} />
      </div>
    );
  }
}
