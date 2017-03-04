/**
 * A semantic wrapper around bootstrap's css container
 */
import React, { PropTypes } from 'react';

const { node } = PropTypes;

const Container = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

Container.propTypes = {
  children: node,
};

export default Container;
