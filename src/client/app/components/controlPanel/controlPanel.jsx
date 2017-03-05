import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './controlPanel.scss';
import Button from '../button/button';
import * as barActions from '../../redux/actions/barActions';

const { shape, func, array } = PropTypes;

@connect(() => ({}), {
  updateBarData: barActions.updateBarData,
})
export default class ControlPanel extends Component {
  static propTypes = {
    buttonData: shape({
      bars: array,
    }),
    updateBarData: func,
  };

  static defaultProps = {
    value: 0,
    updateBarData: () => {},
  };

  state = {
    selectedBar: 0,
  };

  onBarChange = (event) => {
    this.setState({
      selectedBar: event.target.value,
    });
  }

  buttonClickHandler = (valueToBeUpdated) => {
    const { updateBarData } = this.props;
    const { selectedBar } = this.state;
    const barInfo = {
      selectedBar,
      valueToBeUpdated,
    };
    updateBarData(barInfo);
  }

  renderButtons() {
    const { buttonData } = this.props;

    return React.Children.map(buttonData.buttons, (button, index) =>
      <Button
        onClick={() => this.buttonClickHandler(button)}
        className={styles.buttons}
        value={button}
        key={index}
      />);
  }

  renderSelectOptions() {
    const { buttonData } = this.props;
    return React.Children.map(buttonData.bars, (bar, index) => {
      const naming = `#progress${index}`;
      return <option value={index}>{naming}</option>;
    });
  }

  render() {
    return (
      <div className={styles.controlPanelContainer}>
        <select
          onChange={this.onBarChange}
          value={this.state.selectedBar}
          className={`form-control col-sm-6 col-xs-12 ${styles.selectBar}`}
        >
          {this.renderSelectOptions()}
        </select>
        <div className={`col-sm-6  col-xs-12 ${styles.buttonContainer}`}>
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}
