const React = require('react');
const { shallow, mount } = require('enzyme');
const { MainForm } = require('../../../../pages/components/MainForm');
const { Input } = require('../../../../pages/components/Input');

let formFields;
let evt;
let shallowComp;
let mountComp;

describe('<MainForm />', () => {
  beforeEach(() => {
    formFields = [
      { type: 'text', name: 'nombre', placeholder: 'nombre', title: 'Nombre' },
      { type: 'text', name: 'apellido', placeholder: 'apellido', title: 'Apellido' },
      { type: 'email', name: 'email', placeholder: 'email', title: 'Email' },
      { type: 'phone', name: 'telefono', placeholder: 'telefono', title: 'Telefono' },
      { type: 'address', name: 'direccion', placeholder: 'direccion', title: 'Direccion' },
      { type: 'textarea', name: 'razon', placeholder: 'razon', title: 'Razon' }
    ];

    evt = {
      preventDefault: function() {},
      target: {
        name: undefined,
        value: undefined
      }
    };

    shallowComp = shallow(<MainForm formFields={formFields} />);

    mountComp = mount(<MainForm formFields={formFields} />);
  });

  it('Should render without errors', () => {
    expect(shallowComp).toMatchSnapshot();
  });
});
