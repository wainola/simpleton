import React from 'react';

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      services: [
        {
          group: 'Divorcios',
          active: true,
          services: [
            {
              title: 'Divorcios',
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque.'
            },
            {
              title: 'Divorcio de mutuo acuerdo',
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque'
            },
            {
              title: 'Divorcios unilaterales',
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque'
            }
          ]
        },
        {
          group: 'Separaciones',
          active: false,
          services: [
            {
              title: 'Separación judicial',
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque'
            },
            {
              title: 'Liquidación de sociedad conyugal',
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque'
            }
          ]
        },
        {
          group: 'Otros',
          active: false,
          services: [
            {
              title: 'Regulación de alimentos',
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque'
            },
            {
              title: 'Relación directa y regular',
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque'
            },
            {
              title: 'Cuidado personal',
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque'
            },
            {
              title: 'Transacciones',
              description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, itaque'
            }
          ]
        }
      ]
    };
    this.renderServices = this.renderServices.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(evt) {
    evt.preventDefault();
    console.log('evt', evt.target);
    const { services } = this.state;
    services[evt.name].active = !services[evt.name].active;
    this.setState({
      ...this.state,
      ...services
    });
  }

  renderServices(servicesCollection, idx) {
    console.log('idx', idx);
    const { group, active, services } = servicesCollection;
    return (
      <AccordionItem
        idx={idx}
        group={group}
        active={active}
        services={services}
        Toggle={this.handleToggle}
      />
    );
  }

  render() {
    const { services } = this.state;
    console.log('accordion');
    return <div className="accordion-container">{services.map(this.renderServices)}</div>;
  }
}

const AccordionItem = ({ idx, group, active, services, Toggle }) => {
  return (
    <div className={`${active ? 'active' : 'inactive'} accordion-item`} onClick={Toggle} name={idx}>
      <span className="summary" name={idx}>
        {group}
      </span>
      <span className="folding-pannel answer">{services.answer}</span>
    </div>
  );
};

export default Accordion;
