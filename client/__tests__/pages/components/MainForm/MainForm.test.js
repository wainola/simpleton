const React = require('react');
const { shallow } = require('enzyme');
const { MainForm } = require('../../../../pages/components/MainForm');

describe('<MainForm />', () => {
  it('Should render without errors', () => {
    const component = shallow(<MainForm formFields={[]} />);
    console.log('MainForm', component.html());
  });
});
