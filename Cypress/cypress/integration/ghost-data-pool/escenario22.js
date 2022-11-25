import { faker } from '@faker-js/faker';

import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
import { PagesPage } from '../../pageObject/pagesPage';
import { PostPage } from '../../pageObject/postPage';


const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();
const pagesPage = new PagesPage();

const tituloRepetido = faker.lorem.sentence(5)

const escenario13 = {
    'a_priori': {
        'datos_validos' : 
            {
                titulo: 'titulo valido2',
                descripcion: 'Descripcion valida'
            },
        'datos_formato_invalido' :
            {
                titulo: ')(!@#$',
                descripcion: 'Descripcion valida'
            },
        'datos_frontera_superior':
            {
                titulo: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
                descripcion: 'Descripcion valida'
            },
        'datos_frontera_inferior':
            {
                titulo: 'a',
                descripcion: 'Descripcion valida'
            },
        'campos_vacios':
            {
                titulo: '',
                descripcion: 'Descripcion valida'
            },
        'datos_equivocados':
            {
                titulo: '|||||',
                descripcion: 'Descripcion valida'
            },
        'datos_repetidos': 
            {
                titulo: 'Descripcion valida',
                descripcion: 'Descripcion valida',
            }
    },

    'aleatorio_dinámico': {
        'datos_validos' : 
            {
                titulo: faker.lorem.sentence(5),
                descripcion: 'Descripcion valida'
            },
        'datos_formato_invalido' :
            {
                titulo: faker.internet.ip(),
                descripcion: 'Descripcion valida'
            },
        'datos_frontera_superior':
            {
                titulo: faker.lorem.sentence(50),
                descripcion: 'Descripcion valida'
            },
        'datos_frontera_inferior':
            {
                titulo: faker.lorem.word({ strategy: 'shortest' }),
                descripcion: 'Descripcion valida'
            },
        'campos_vacios':
            {
                titulo: '',
                descripcion: faker.lorem.paragraph(3),
            },
        'datos_equivocados':
            {
                titulo: faker.name.firstName(),
                descripcion: 'Descripcion valida'
            },
        'datos_repetidos': 
            {
                titulo: tituloRepetido,
                descripcion: tituloRepetido,
            }
    },

    'aleatorio': {
        'datos_validos' : 
            {
                titulo: faker.lorem.sentence(5),
                descripcion: faker.lorem.paragraph(3),
            },
        'datos_formato_invalido' :
            {
                titulo: faker.internet.ip(),
                descripcion: faker.lorem.paragraph(3),
            },
        'datos_frontera_superior':
            {
                titulo: faker.lorem.sentence(300),
                descripcion: faker.lorem.paragraph(3),
            },
        'datos_frontera_inferior':
            {
                titulo: faker.lorem.word({ strategy: 'shortest' }),
                descripcion: faker.lorem.paragraph(3),
            },
        'campos_vacios':
            {
                titulo: '',
                descripcion: faker.lorem.paragraph(3),
            },
        'datos_equivocados':
            {
                titulo: faker.name.firstName(),
                descripcion: faker.lorem.paragraph(3),
            },
        'datos_repetidos': 
            {
                titulo: tituloRepetido,
                descripcion: tituloRepetido,
            }
    },
}



for (let escenario in escenario13) {
        
        describe('Ghost tests ' + escenario, () => {
            beforeEach(() => {
                /* Given I log in into Ghost admin */
                cy.visit('http://localhost:2368/ghost')
                cy.login(Cypress.env('username'), Cypress.env('password'));
                cy.wait(1000);

                adminPage.getNewPostButton().click();
                cy.wait(1000)
                cy.createPost('post to delete', 'This is a post to delete');
                adminPage.navigateToPostsPage();
                adminPage.getPublishedPostsButton().click();
                cy.deleteAllPosts()
                cy.wait(1000);
            })

            for (let datoGenerado in escenario13[escenario]) {
                it('escenario 13.' + datoGenerado, () => {
                    let data = escenario13[escenario][datoGenerado];

                    adminPage.navigateToPagesPage();
                    cy.wait(500);
                    cy.createPage(data.titulo, data.descripcion);
                    
                    cy.wait(1000)
                    adminPage.navigateToPagesPage();
                    cy.wait(1000)
                    pagesPage.getAllPagesTitle().contains(data.titulo).should('exist');


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
                adminPage.navigateToPagesPage();
                cy.wait(500);
                cy.deleteAllPages()
                cy.wait(1000);

                adminPage.navigateToPostsPage();
                adminPage.getPublishedPostsButton().click();
                cy.deleteAllPosts()
                cy.wait(1000);
            })
    })
}
