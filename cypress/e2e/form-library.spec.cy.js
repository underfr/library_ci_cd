describe('Test ajout livres Pokémon', () => {

    before(() => {
      cy.visit('http://localhost:8000/login')
      cy.get('#email').clear().type('antoine.rousseau1@test.fr')
      cy.get('#password').clear().type('Test1234!')
      cy.get('button[type="submit"]').click()
      cy.wait(3000)
    })
  
    beforeEach(() => {
      cy.fixture('books_pokemon.json').as('booksData')
    })
  
    it('doit enregistrer des livres Pokémon', function () {
      this.booksData.forEach((item) => {
        const book = item.book
  
        cy.visit('http://localhost:8000/book/add')
        cy.wait(500)
  
        cy.get('#title').clear().type(book.title)
        cy.get('#author').clear().type(book.author)
        cy.get('#description').clear().type(book.description)
        cy.get('#publish_at').type(book.publish_at)
        cy.get('#categories').select(book.categories)
        cy.get('#cover').selectFile(`cypress/fixtures/poke/${book.cover}`, { force: true })
        cy.get('button[type="submit"]').click()
        cy.wait(300)
      })
    })
  })