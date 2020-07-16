describe('Application main view', () => {
it('contains title', () => {
    cy.visit('/');
    cy.get("section[name='title']").should('contain', 'GitHub Search engine')
  });
});