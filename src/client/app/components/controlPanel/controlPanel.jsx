import React, { PropTypes, Component } from 'react';
import styles from './controlPanel.scss';
import Button from '../button/button';

const { object, func } = PropTypes;

export default class ControlPanel extends Component {
  static propTypes = {
    buttonData: object,
    onClick: func,
  };

  static defaultProps = {
    value: 0,
    onClick: () => {},
  };

  renderSelectOptions() {
    const { buttonData } = this.props;
    return React.Children.map(buttonData.buttons, (button, index) =>
      <option value={`#progress${index}`}>{`#progress${index}`}</option>);
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
