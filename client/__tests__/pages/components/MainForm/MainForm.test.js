const React = require('react');
const { shallow, mount } = require('enzyme');
const { MainForm } = require('../../../../pages/components/MainForm');
const { Input } = require('../../../../pages/components/Input');

let formFields;
let evt;
let shallowComp;
let mountComp;
let dataToPut;

describe('<MainForm />', () => {
  beforeEach(() => {
    evt = {
      preventDefault() {},
      target: {
        name: undefined,
        value: undefined
      }
    };

    dataToPut = [
      { name: 'nombre', value: 'nicolas' },
      { name: 'apellido', value: 'riquelme' },
      { name: 'email', value: 'nicolas@mail.com' },
      { name: 'telefono', value: '123456789' },
      { name: 'razon', value: 'quiero hacer mil consultas papa!!!' },
      { name: 'direccon', value: 'los pajaritos 123' }
    ];

    shallowComp = shallow(<MainForm />);

    mountComp = mount(<MainForm />);
  });

  it('should render without errors', () => {
    expect(shallowComp).toMatchSnapshot();
  });

  it('shoudl set the state onChange event', () => {
    mountComp.find('input').forEach((item, idx) => {
      const evtToSend = {
        ...evt,
        target: {
          name: dataToPut[idx].name,
          value: dataToPut[idx].value
        }
      };

      item.simulate('change', evtToSend);
    });

    const { fields } = mountComp.state();
    const keys = Object.keys(fields);

    expect(keys).toHaveLength(6);
  });

  it('should submit and validate the data', () => {
    const submitEvent = {
      preventDefault() {}
    };

    mountComp.find('input').forEach((item, idx) => {
      const evtToSend = {
        ...evt,
        target: {
          name: dataToPut[idx].name,
          value: item.props().name !== 'telefono' ? dataToPut[idx].value : '+56983102345'
        }
      };

      item.simulate('change', evtToSend);
    });

    mountComp.find('form').simulate('submit', submitEvent);

    const { invalidData } = mountComp.state();

    expect(invalidData).toHaveLength(0);
  });

  it.only('should submit and validate the data and then trigger the alerts if the data has errors', () => {
    const submitEvent = {
      preventDefault() {}
    };

    mountComp.find('input').forEach((item, idx) => {
      const evtToSend = {
        ...evt,
        target: {
          name: dataToPut[idx].name,
          value: dataToPut[idx].value
        }
      };

      item.simulate('change', evtToSend);
    });

    mountComp.find('form').simulate('submit', submitEvent);

    const { invalidData } = mountComp.state();
  });
});
