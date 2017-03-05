import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Button from './button.jsx';

describe('Button Component', () => {
  it('Button Component should work on default', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.find('.btn')).to.have.length(1);
    expect(wrapper.find('.btn-success')).to.have.length(1);
    expect(wrapper.props().className).to.equal('');
    expect(wrapper.props().value).to.equal(0);
  });

  it('Button Component should work when props are passed on', () => {
    const wrapper = mount(<Button value={10} className="Test" />);
    expect(wrapper.props().className).to.equal('Test');
    expect(wrapper.props().value).to.equal(10);
  });
});
