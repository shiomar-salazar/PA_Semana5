import { faker } from '@faker-js/faker';
import { AdminPage } from "../../pageObject/adminPage";
import { TagPage } from '../../pageObject/tagPage';
const adminPage = new AdminPage();
const tagPage = new TagPage();

const escenario21 = {
    'a_priori': {
        'datos_validos' : 
            {
                name: 'nombre valido',
                slug: 'slug',
                descripcion: 'Descripcion valida',
                error: false
            },
        'datos_frontera_superior':
            {
                name: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
                slug: 'slug',
                descripcion: 'Descripcion valida',
                error: true
            },
        'campos_vacios':
            {
                name: '',
                slug: 'slug',
                descripcion: 'Descripcion valida',
                error: true
            },
        'datos_frontera_inferior':
            {
                name: " ",
                slug: 'slug',
                descripcion: 'Descripcion valida',
                error: true
            },
    },
    'aleatorio_dinámico': {
        'datos_validos' : 
            {
                name: faker.lorem.word(),
                slug: faker.lorem.slug(),
                descripcion: faker.lorem.paragraph(3),
                error: false
            },
        'datos_frontera_superior':
            {
                name: faker.lorem.paragraph(5),
                slug: faker.lorem.slug(),
                descripcion: faker.lorem.paragraph(3),
                error: true
            },
        'campos_vacios':
            {
                name: "",
                slug: faker.lorem.slug(),
                descripcion: faker.lorem.paragraph(3),
                error: true
            },
    },
    'aleatorio': {
        'datos_validos' : 
            {
                name: faker.name.firstName(),
                slug: faker.lorem.slug(),
                descripcion: faker.lorem.paragraph(3),
                error: false
            },
        'datos_frontera_superior':
            {
                name: faker.lorem.paragraph(7),
                slug: faker.lorem.slug(),
                descripcion: faker.lorem.paragraph(3),
                error: true
            },
        'campos_vacios':
            {
                name: "",
                slug: faker.lorem.slug(),
                descripcion: faker.lorem.paragraph(3),
                error: true
            },
    },
}

for (let escenario in escenario21) {
        
        describe('Ghost tests ' + escenario, () => {
            beforeEach(() => {
                /* Given I log in into Ghost admin */
                cy.visit('http://localhost:2368/ghost')
                cy.login(Cypress.env('username'), Cypress.env('password'));
                cy.wait(1000);
            })

            for (let datoGenerado in escenario21[escenario]) {
                it('escenario 21.' + datoGenerado, () => {
                    let data = escenario21[escenario][datoGenerado];
                    cy.log(data)
                    adminPage.navigateToTagPage();
                    cy.createTag(data.name, data.slug, data.descripcion);
                    cy.wait(1000);
                    adminPage.navigateToTagPage();

                    if(!data.error){
                        tagPage.getAllTagsTitle().contains(data.titulo).should('exist');
                    }else{
                        tagPage.getAllTagsTitle().contains(data.titulo).should('not.exist');
                    }

                    adminPage.navigateToMainPage();
                    cy.wait(500);
                    adminPage.getNewPostButton().click();

                    cy.wait(1000)
                    cy.createPost('My first post', 'This is my first post');
                    cy.wait(500);

                    adminPage.navigateToPostsPage();
                    cy.wait(500);
                    adminPage.getPublishedPostsButton().click();
                    cy.wait(500);
                    publishedPostsPage.getAllPostTitles().contains('My first post').should('exist');                    
                })
        }
        after(() => {
            adminPage.navigateToTagPage();
            cy.wait(500);
            cy.deleteAllTags();
            cy.wait(1000);

            adminPage.navigateToPostsPage();
            adminPage.getPublishedPostsButton().click();
            cy.deleteAllPosts()
            cy.wait(1000);
        })
    })
}
