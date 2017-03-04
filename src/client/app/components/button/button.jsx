import React, { PropTypes, Component } from 'react';

const { number, func, string } = PropTypes;

export default class Button extends Component {
  static propTypes = {
    className: string,
    value: number,
    onClick: func,
  };

  static defaultProps = {
    value: 0,
    onClick: () => {},
  };

  render() {
    const { value, onClick, className } = this.props;

    return (
      <input className={`btn btn-success ${className}`} onClick={onClick} type="button" value={value} />
    );
  }
}
