describe('Pruebas T2', ()=>{
    //LOGIN
    it('Login fail validation', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#biblioteca').click();
        cy.get('input[name="Username"]').type("Admin1");
        cy.get('input[name="Password"]').type("admin1");
        cy.get('.btn-primary').click();
        cy.get('#fail').should("have.text", "Usuario y/o contraseña incorrecta");

    })

    it('Login correct validation', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#biblioteca').click();
        cy.get('input[name="Username"]').type("Admin");
        cy.get('input[name="Password"]').type("admin");
        cy.get('.btn-primary').click();
        cy.get('#biblioteca').click();
        cy.get('.body-content');
    })
});

describe('Pruebas T2:Libros', ()=>{
    it('Agregar Libro a Biblioteca', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#biblioteca').click();
        cy.get('input[name="Username"]').type("Admin");
        cy.get('input[name="Password"]').type("admin");
        cy.get('.btn-primary').click();
        cy.get('a[href="/biblioteca/add?libro=2"]').click();
        cy.get('.alert-success').should("have.text", "\n            Se añádio el libro a su biblioteca\n        ");
    })

    it('Marcar Como Leyendo', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#biblioteca').click();
        cy.get('input[name="Username"]').type("Admin");
        cy.get('input[name="Password"]').type("admin");
        cy.get('.btn-primary').click();
        cy.get('#biblioteca').click();
        cy.get('a[href="/biblioteca/MarcarComoLeyendo?libroId=2"]').click();
        cy.get('#estado').should("have.text", "LEYENDO");
    })

    it('Marcar Como Terminado', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#biblioteca').click();
        cy.get('input[name="Username"]').type("Admin");
        cy.get('input[name="Password"]').type("admin");
        cy.get('.btn-primary').click();
        cy.get('#biblioteca').click();
        cy.get('a[href="/biblioteca/MarcarComoTerminado?libroId=2"]').click();
        cy.get('#estado').should("have.text", "TERMINADO");
    })
});

describe('Pruebas T2:Libros-Comentario', ()=>{
    it('Agregar Comentario', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#biblioteca').click();
        cy.get('input[name="Username"]').type("Admin");
        cy.get('input[name="Password"]').type("admin");
        cy.get('.btn-primary').click();
        cy.get('a[href="/Libro/Details?id=2"]').click();
        cy.get('textarea[class="form-control"]').type("10/10");

        //PUNTAJE
        cy.get('input[name="Puntaje"]').type("5");

        //FIN
        cy.get('.btn-primary').click();
    })
});