const React = require('react');

const { MainForm } = require('../../../../pages/components/MainForm');

describe('<MainForm />', () => {
  it('Should render without errors', () => {
    const component = render(<MainForm formFields={[]} />);

    console.log('MainForm', component);
  });
});
