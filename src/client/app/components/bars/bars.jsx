import React, { PropTypes, Component } from 'react';
import styles from './bars.scss';

const { number } = PropTypes;

export default class Bars extends Component {
  static propTypes = {
    barPercentage: number,
    limit: number, // Total numerical value to attain 100%
  };

  static defaultProps = {
    barPercentage: 0,
    limit: 100,
  };

  render() {
    const { barPercentage } = this.props;

    return (
      <div className={styles.barContainer}>
        <div className={styles.solidBar} style={{ width: `${barPercentage}%` }} />
        <p className={styles.actualValue}>{barPercentage}%</p>
      </div>
    );
  }
}
