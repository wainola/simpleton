import React from 'react';
import { mount } from 'enzyme';
import { CustomForm } from '../../../../pages/components/MainForm';

let mountedComponent;

describe('<CustomForm />', () => {
  beforeAll(() => {
    mountedComponent = mount(<CustomForm handleChange={() => {}} handleSubmit={() => {}} />);
  });
  it('should render without errors', () => {
    expect(mountedComponent).toMatchSnapshot();
  });
});
