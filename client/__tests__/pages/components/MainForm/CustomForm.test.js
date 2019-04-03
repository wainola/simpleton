import React from 'react';
import { mount } from 'enzyme';
import { CustomForm } from '../../../../pages/components/MainForm';
import { CustomAlert } from '../../../../pages/components/Alert';

let mountedComponent;

describe('<CustomForm />', () => {
  beforeAll(() => {
    const data = {
      nombre: true,
      apellido: true,
      email: true,
      telefono: true,
      direccion: true,
      razon: true
    };
    mountedComponent = mount(
      <CustomForm
        handleChange={() => {}}
        handleSubmit={() => {}}
        CustomAlert={CustomAlert}
        validFields={data}
      />
    );
  });
  it('should render without errors', () => {
    expect(mountedComponent).toMatchSnapshot();
  });
});
