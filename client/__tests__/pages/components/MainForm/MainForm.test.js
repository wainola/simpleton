const React = require('react');
const { shallow, mount, render } = require('enzyme');
const { MainForm } = require('../../../../pages/components/MainForm');

describe('<MainForm />', () => {
  it('Should render without errors', () => {
    const formFields = [
      { descriptor: 'Nombre', type: 'text' },
      { descriptor: 'Email', type: 'email' },
      { descriptor: 'Teléfono', type: 'phone' }
    ];
    const component = shallow(<MainForm formFields={formFields} />);

    console.log('comp:::', component);
    expect(component).toMatchSnapshot();
  });
});
