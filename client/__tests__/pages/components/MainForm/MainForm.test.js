const React = require('react');
const { shallow, mount } = require('enzyme');
const { MainForm } = require('../../../../pages/components/MainForm');
const { Input } = require('../../../../pages/components/Input');

let formFields;
let mockHandleChange;
let evt;
let shallowComp;
let shallowInputs;
let mountComp;

describe('<MainForm />', () => {
  beforeEach(() => {
    formFields = [
      { descriptor: 'Nombre', type: 'text' },
      { descriptor: 'Email', type: 'email' },
      { descriptor: 'Teléfono', type: 'phone' }
    ];

    mockHandleChange = jest.fn();

    evt = {
      preventDefault() {},
      target: {
        dataset: {
          descriptor: 'nombre'
        },
        value: 'john'
      }
    };

    shallowComp = shallow(<MainForm formFields={formFields} />);

    mountComp = mount(<MainForm formFields={formFields} />);

    shallowInputs = formFields.map((item, idx) =>
      shallow(
        <Input
          key={idx}
          type={item.type}
          title={item.descriptor}
          placeholder={`Ingrese su ${item.descriptor.toLowerCase()}`}
          handleChange={mockHandleChange}
          descriptor={item.descriptor}
        />
      )
    );
  });

  it('Should render without errors', () => {
    expect(shallowComp).toMatchSnapshot();
  });

  it('should call the mockHandleChange function on the Inputs', () => {
    shallowInputs.forEach(e => {
      e.find('input').simulate('change', evt);
    });

    expect(mockHandleChange).toHaveBeenCalledTimes(3);
  });

  it('sould test the implementation of handleChange if one name is passed', () => {
    mountComp
      .find('input')
      .first()
      .simulate('change', evt);

    const { name } = mountComp.state('validations');

    expect(name).toBe(true);
  });

  it('should test the implementation of the email validator if one email is provided', () => {
    const emailEvt = {
      preventDefault() {},
      target: {
        dataset: {
          descriptor: 'email'
        },
        value: 'nicolas@mail.com'
      }
    };

    mountComp
      .find('input')
      .first()
      .simulate('change', emailEvt);

    const { email } = mountComp.state('validations');

    expect(email).toBe(true);
  });

  it('should return false if the email have erroneous formating', () => {
    const wrongEmailEvt = {
      preventDefault() {},
      target: {
        dataset: {
          descriptor: 'email'
        },
        value: 'nicolas@mail.'
      }
    };

    mountComp
      .find('input')
      .first()
      .simulate('change', wrongEmailEvt);

    const { email } = mountComp.state('validations');

    expect(email).toBe(false);
  });
});
