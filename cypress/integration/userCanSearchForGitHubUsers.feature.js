describe("User can search for Github registry of users", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=alex",
      response: "fixture:searchResults.json",
    });

    cy.visit("/");
    cy.get("input").type("alex");
    cy.get("#submit").click();
  });

  it("User can see first username", () => {
    cy.contains("alex").should("be.visible");
  });

  it("User can see second username", () => {
    cy.contains("alexcrichton").should("be.visible");
  });
});