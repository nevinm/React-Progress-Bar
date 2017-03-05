import React, { PropTypes, Component } from 'react';
import styles from './controlPanel.scss';
import Button from '../button/button';

const { shape, func, array } = PropTypes;

export default class ControlPanel extends Component {
  static propTypes = {
    buttonData: shape({
      bars: array,
    }),
    onClick: func,
  };

  static defaultProps = {
    value: 0,
    onClick: () => {},
  };

  renderSelectOptions() {
    const { buttonData } = this.props;
    return React.Children.map(buttonData.bars, (bar, index) => {
      const naming = `#progress${index + 1}`;
      return <option value={naming}>{naming}</option>;
    });
  }

  renderButtons() {
    const { buttonData } = this.props;
    return React.Children.map(buttonData.buttons, (button, index) =>
      <Button className={styles.buttons} value={button} key={index} />);
  }

  render() {
    return (
      <div className={styles.controlPanelContainer}>
        <select className={`form-control ${styles.selectBar}`}>
          {this.renderSelectOptions()}
        </select>
        <div className={styles.buttonContainer}>
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}
