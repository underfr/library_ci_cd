describe('Test des livres Fixtures', () => {

    before(() => {
      // La connexion se fait UNE SEULE FOIS avant tous les tests
      cy.visit('http://127.0.0.1:8080/category/add')
      cy.get('#email').clear().type('antoine.rousseau1@test.fr')
      cy.get('#password').clear().type('Test1234!')
      cy.get('button[type="submit"]').click()
      cy.wait(3000)
    })
  
    beforeEach(() => {
      // La fixture est rechargée avant chaque test
      cy.fixture('books').as('booksData')
    })
  
    it('doit enregistrer des livres', function () {
      cy.visit('http://127.0.0.1:8080/book/add') // adapte l'URL si besoin
      cy.wait(1000)
  
      this.booksData.forEach((item) => {
        const book = item.book
  
        cy.get('#title').clear().type(book.title)
        cy.get('#author').clear().type(book.author)
        cy.get('#description').clear().type(book.description)
  
        // Sélection des catégories dans le select multiple
        cy.get('#categories').select(book.categories)
  
        cy.get('button[type="submit"]').click()
        cy.wait(500)
  
        // Retour sur la page d'ajout pour le livre suivant
        cy.visit('http://127.0.0.1:8080/book/add')
        cy.wait(500)
      })
    })
  })