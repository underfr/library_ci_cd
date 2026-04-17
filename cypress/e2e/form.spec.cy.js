describe('Test du site de librairie', () => {

    it('remplir le formulaire d\'inscription', function () {
            
        cy.visit('https://library.mithridatem.fr/register');

        cy.get('#firstname').type('Antoine');
        cy.get('#lastname').type('Rousseau');
        cy.get('#email').type('antoine.rousseau1@test.fr');
        cy.get('#password').type('Test1234!');
        cy.get('#confirm-password').type('Test1234!');

        cy.get('button[type="submit"]').click();

        // Vérification du feedback DaisyUI
        cy.get('article')
            .should('be.visible')
            .and('contain', 'Le compte a ete ajoute en BDD');
    });


    // it('remplir le formulaire d\'inscription avec un compte déjà en BDD', function () {
            
    //     cy.visit('https://library.mithridatem.fr/register');

    //     cy.get('#firstname').type('Michel');
    //     cy.get('#lastname').type('Michel');
    //     cy.get('#email').type('michel.michel@michel.com');
    //     cy.get('#password').type('1234');
    //     cy.get('#confirm-password').type('1234');

    //     cy.get('button[type="submit"]').click();

    //     // Vérification du feedback DaisyUI
    //     cy.get('article')
    //         .should('be.visible')
    //         .and('contain', 'Le compte existe deja en BDD');
    // });


    // it('remplir le formulaire de connexion avec un compte qui n\'existe pas', function () {
            
    //     cy.visit('https://library.mithridatem.fr/login');

    //     cy.get('#email').type('mouchel.mouchel@mouchel.com');
    //     cy.get('#password').type('1234');

    //     cy.get('button[type="submit"]').click();

    //     // Vérification du feedback DaisyUI
    //     cy.get('article')
    //         .should('be.visible')
    //         .and('contain', 'Les informations de connexion sont invalides');
    // });


    // it('ajouter une categorie', function () {

    //     cy.visit('https://library.mithridatem.fr/login');
    //     cy.get('#email').type('michel.michel@michel.com');
    //     cy.get('#password').type('1234');
    //     cy.get('button[type="submit"]').click();

    //     cy.wait(500);

    //     cy.visit('https://library.mithridatem.fr/category/add');

    //     cy.get('#name').type('horreur');

    //     cy.get('button[type="submit"]').click();

    //     // Vérification du feedback DaisyUI
    //     cy.get('article')
    //         .should('be.visible')
    //         .and('contain', 'La categorie a ete ajoutee en BDD');
    // });


    // it('ajouter une categorie qui existe déjà', function () {

    //     cy.visit('https://library.mithridatem.fr/login');
    //     cy.get('#email').type('michel.michel@michel.com');
    //     cy.get('#password').type('1234');
    //     cy.get('button[type="submit"]').click();

    //     cy.wait(500);

    //     cy.visit('https://library.mithridatem.fr/category/add');

    //     cy.get('#name').type('horreur');

    //     cy.get('button[type="submit"]').click();

    //     // Vérification du feedback DaisyUI
    //     cy.get('article')
    //         .should('be.visible')
    //         .and('contain', 'Cette categorie existe deja');
    // });


    // it('ajouter un livre', function () {

    //     cy.visit('https://library.mithridatem.fr/login');
    //     cy.get('#email').type('michel.michel@michel.com');
    //     cy.get('#password').type('1234');
    //     cy.get('button[type="submit"]').click();

    //     cy.wait(500);

    //     cy.visit('https://library.mithridatem.fr/book/add');

    //     cy.get('#title').type('AWAWA');
    //     cy.get('#author').type('Michel Michel');
    //     cy.get('#description').type('AWAWAAAAAAAAA');
    //     cy.get('#publish_at').type('2026-04-16');
    //     cy.get('#cover').selectFile('awawa.png');
    //     cy.get('#categories').select('horreur');

    //     cy.get('button[type="submit"]').click();

    //     // Vérification du feedback DaisyUI
    //     cy.get('article')
    //         .should('be.visible')
    //         .and('contain', 'Le livre a ete ajoute en BDD');
    // });


    // it('emprunter un livre', function () {

    //     cy.visit('https://library.mithridatem.fr/login');
    //     cy.get('#email').type('michel.michel@michel.com');
    //     cy.get('#password').type('1234');
    //     cy.get('button[type="submit"]').click();

    //     cy.wait(500);

    //     cy.visit('https://library.mithridatem.fr/lending/add');

    //     cy.get('#book_id').select('13');
    //     cy.get('#mandatory_at').type('2026-04-26');

    //     cy.get('button[type="submit"]').click();

    //     // Vérification du feedback DaisyUI
    //     cy.get('article')
    //         .should('be.visible')
    //         .and('contain', 'L\'emprunt a ete ajoute en BDD');
    // });


    // it('supprimer un livre', function () {

    //     cy.visit('https://library.mithridatem.fr/login');
    //     cy.get('#email').type('michel.michel@michel.com');
    //     cy.get('#password').type('1234');
    //     cy.get('button[type="submit"]').click();

    //     cy.wait(500);

    //     cy.visit('https://library.mithridatem.fr/book/all');

    //     cy.get('article')
    //         .contains('Bel-Ami')
    //         .find('footer form button[type="submit"]')
    //         .contains('Supprimer')
    //         .click();
    //     //CA NE MARCHE PAS

    //     // Vérification du feedback DaisyUI
    //     cy.get('article')
    //         .should('be.visible')
    //         .and('contain', 'Le livre a été supprimer');
    // });
});