/* eslint-disable */
describe('<Form />', () => {
  beforeEach(() => {
    cy.viewport('iphone-5');
    cy.reload();
    cy.visit('/');
  });
  it('should send data from the form', async () => {
    cy.get('input').each((item, idx) => {
      switch (idx) {
        case 0:
          return cy.wrap(item).type('nicolas');
        case 1:
          return cy.wrap(item).type('riquelme');
        case 2:
          return cy.wrap(item).type('nrriquelme@gmail.com');
        case 3:
          return cy.wrap(item).type('123456789');
        case 4:
          return cy.wrap(item).type('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
        case 5:
          return cy.wrap(item).type('Los Poti Punes 123, depto 404');
      }
    });

    cy.get('button[type="submit"]').click();
    cy.wait(2000);

    cy.get('button[name="close-dialog"]').click();
  });
});
