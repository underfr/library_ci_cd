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
      cy.fixture('category').as('categoryData')
    })
  
    it('doit enregistrer des catégorie', function(){
    cy.visit('http://127.0.0.1:8080/category/add')
    cy.get('li').contains('Categories').click()
    cy.wait(10000)
    cy.get('p').contains('Ajouter une categorie').click()
    cy.wait(1000)
    this.categoryData.forEach((item)=>{
        const category = item.category
        cy.get('#name').clear().type(category.name)
        cy.get('button[type="submit"]').click()
        cy.wait(20)
    })
})
  })