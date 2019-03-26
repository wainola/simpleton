const React = require('react');
const { shallow, mount, render } = require('enzyme');
const { MainForm } = require('../../../../pages/components/MainForm');

let formFields;
let mockHandleChange;
let evt;

describe('<MainForm />', () => {
  beforeEach(() => {
    formFields = [
      { descriptor: 'Nombre', type: 'text' },
      { descriptor: 'Email', type: 'email' },
      { descriptor: 'Teléfono', type: 'phone' }
    ];

    mockHandleChange = jest.fn(() => console.log('peos!!'));

    evt = {
      preventDefault() {},
      target: {
        dataset: {
          descriptor: 'nombre'
        },
        value: 'john'
      }
    };
  });
  it('Should render without errors', () => {
    const component = shallow(<MainForm formFields={formFields} />);

    // console.log('comp:::', component);
    expect(component).toMatchSnapshot();
  });
  it('should set the state with all the fields on validation object set to true', () => {
    const component = mount(<MainForm formFields={formFields} handleChange={mockHandleChange} />);

    // console.log('comp2:::::', component.html());
    // component.find('input').forEach(e => console.log('e', e.simulate('change', evt)));
    // console.log(Array.from(component.find('input')));
    // const first = Array.from(component.find('input'))[0];
    // console.log('first', first);

    console.log(
      component
        .find('input')
        .first()
        .simulate('change', evt)
    );

    // first.simulate('change', evt);
  });
});
