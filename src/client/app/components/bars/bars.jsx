import React, { PropTypes, Component } from 'react';
import styles from './bars.scss';

const { number } = PropTypes;

export default class Bars extends Component {
  static propTypes = {
    initialValue: number,
    updateBarValue: number,
    limit: number, // Total numerical value to attain 100%
  };

  static defaultProps = {
    limit: 100,
    initialValue: 0,
    updateBarValue: 0,
  };

  state = {
    barPercentage: 0,
  }

  calculatePercentage = () => {
    const { initialValue, limit, updateBarValue } = this.props;
    return ((initialValue + updateBarValue) / limit) * 100;
  }

  render() {
    const { initialValue } = this.props;

    return (
      <div className={styles.barContainer}>
        <div className={styles.solidBar} style={{ width: `${this.calculatePercentage()}%` }} />
        <p className={styles.actualValue}>{initialValue}%</p>
      </div>
    );
  }
}
