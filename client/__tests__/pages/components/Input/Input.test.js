const { Input } = require('../../../../pages/components/Input');
const { mount } = require('enzyme');

describe('<Input />', () => {
  it('should render without errors', () => {
    const component = mount(<Input type="text" placeholder="ingrese su nombre" title="Nombre" />);

    expect(component).toMatchSnapshot();
  });

  it('should have an span element and an input element', () => {
    const component = mount(
      <Input type="text" placeholder="ingrese su nombre" title="Nombre del usuario" />
    );

    expect(component.find('span')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(1);
  });
});
