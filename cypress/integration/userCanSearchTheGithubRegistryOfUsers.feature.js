describe('Seach for a Github user', () => {
    before('action required', () => {
        cy.server()
        cy.route('GET', 'https://api.github.com/search/users?q=Alex')
        cy.visit('/')
    })

    it ('by searching', () => {
        cy.get('input'.type('Alex')
        cy.get('button')
    })
