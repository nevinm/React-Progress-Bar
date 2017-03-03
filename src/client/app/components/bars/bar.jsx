import React, { PropTypes, Component } from 'react';
import styles from './bars.scss';

const { number } = PropTypes;

export default class Bar extends Component {
  static propTypes = {
    barPercentage: number,
    limit: number, // Total numerical value to attain 100%
  };

  static defaultProps = {
    barPercentage: 0,
    limit: 100,
  };

  render() {
    const barPercentage = this.props;

    return (
      <div className={styles.barContainer}>
        <p>{barPercentage}</p>
      </div>
    );
  }
}
