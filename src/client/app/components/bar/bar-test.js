import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Bars from './bar.jsx';
import styles from './bar.scss';

const staticData = {
  buttons: [30, 9, -42, -16],
  bars: [35, 25],
  limit: 230,
};

describe('Bars Component', () => {
  it('Bars Component should work on default', () => {
    const wrapper = mount(<Bars />);
    expect(wrapper.find(`.${styles.barContainer}`)).to.have.length(1);
    expect(wrapper.find(`.${styles.actualValue}`)).to.have.length(1);
    expect(wrapper.props().limit).to.equal(100);
    expect(wrapper.props().initialValue).to.equal(0);
    expect(wrapper.props().updateBarValue).to.equal(0);
  });

  it('Bars Component should work when props are passed on', () => {
    const wrapper = mount(<Bars
      initialValue={staticData.bars[0]}
      updateBarValue={staticData.buttons[0]}
      limit={staticData.limit}
    />);
    expect(wrapper.find(`.${styles.barContainer}`)).to.have.length(1);
    expect(wrapper.props().limit).to.equal(230);
    expect(wrapper.props().initialValue).to.equal(35);
    expect(wrapper.props().updateBarValue).to.equal(30);
  });
});
