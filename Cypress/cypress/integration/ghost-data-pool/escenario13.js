import { faker } from '@faker-js/faker';

import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();


const correoRepetido = faker.internet.exampleEmail();

const escenario13 = {
    'a_priori': {
        'datos_validos' : 
            {
                nombre_miembro: 'nombre valido',
                correo: 'correo@valido.com',
                descripcion: 'Descripcion valida'
            },
        'datos_formato_invalido' :
            {
                nombre_miembro: 'nombre valido',
                correo: 'asdf',
                descripcion: 'Descripcion valida'
            },
        'datos_frontera_superior':
            {
                nombre_miembro: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
                correo: 'correo@valido.com',
                descripcion: 'Descripcion valida'
            },
        'datos_frontera_inferior':
            {
                nombre_miembro: 'a',
                correo: 'correo@valido.com',
                descripcion: 'Descripcion valida'
            },
        'campos_vacios':
            {
                nombre_miembro: '',
                correo: 'correo@valido.com',
                descripcion: 'Descripcion valida'
            },
        'datos_equivocados':
            {
                nombre_miembro: '|||||',
                correo: 'correovalido.com',
                descripcion: 'Descripcion valida'
            },
        'datos_repetidos': 
            {
                nombre_miembro: 'correo@valido.com',
                correo: 'correo@valido.com',
                descripcion: 'correo@valido.com',
            }
    },

    'aleatorio_dinámico': {
        'datos_validos' : 
            {
                nombre_miembro: faker.name.firstName(),
                correo: faker.internet.exampleEmail(),
                descripcion: 'Descripcion valida'
            },
        'datos_formato_invalido' :
            {
                nombre_miembro: faker.name.firstName(),
                correo: 'asdf',
                descripcion: faker.lorem.paragraph(5)
            },
        'datos_frontera_superior':
            {
                nombre_miembro: faker.lorem.paragraph(5),
                correo: faker.internet.exampleEmail(),
                descripcion: 'Descripcion valida'
            },
        'datos_frontera_inferior':
            {
                nombre_miembro: faker.lorem.word({ strategy: 'shortest' }),
                correo: faker.internet.exampleEmail(),
                descripcion: 'Descripcion valida'
            },
        'campos_vacios':
            {
                nombre_miembro: faker.name.firstName(),
                correo: faker.internet.exampleEmail(),
                descripcion: 'Descripcion valida'
            },
        'datos_equivocados':
            {
                nombre_miembro: faker.internet.domainName(),
                correo: faker.internet.exampleEmail(),
                descripcion: 'Descripcion valida'
            },
        'datos_repetidos': 
            {
                nombre_miembro: 'correo@valido.com',
                correo: faker.internet.exampleEmail(),
                descripcion: 'correo@valido.com',
            }
    },

    'aleatorio': {
        'datos_validos' : 
            {
                nombre_miembro: faker.name.firstName(),
                correo: faker.internet.exampleEmail(),
                descripcion: faker.lorem.paragraph(3)
            },
        'datos_formato_invalido' :
            {
                nombre_miembro: faker.name.firstName(),
                correo: faker.name.firstName(),
                descripcion: faker.lorem.paragraph(3)
            },
        'datos_frontera_superior':
            {
                nombre_miembro: faker.lorem.paragraph(7),
                correo: faker.internet.exampleEmail(),
                descripcion: faker.lorem.paragraph(3)
            },
        'datos_frontera_inferior':
            {
                nombre_miembro: faker.lorem.word({ strategy: 'shortest' }),
                correo: faker.internet.exampleEmail(),
                descripcion: faker.lorem.paragraph(3)
            },
        'campos_vacios':
            {
                nombre_miembro: faker.name.firstName(),
                correo: faker.internet.exampleEmail(),
                descripcion: ''
            },
        'datos_equivocados':
            {
                nombre_miembro: faker.internet.domainName(),
                correo: faker.internet.exampleEmail(),
                descripcion: faker.lorem.paragraph(3)
            },
        'datos_repetidos': 
            {
                nombre_miembro: correoRepetido,
                correo: correoRepetido,
                descripcion: correoRepetido,
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
            })

            for (let datoGenerado in escenario13[escenario]) {
                it('escenario 13.' + datoGenerado, () => {

                    let data = escenario13[escenario][datoGenerado];

                    adminPage.navigateToMembersPage();
                    cy.createMember(data.nombre_miembro, data.correo, data.descripcion);
                    adminPage.navigateToMembersPage();
                    cy.wait(1000)
                    cy.reload();

                    /*And I delete a existing member */
                    adminPage.navigateToMembersPage();
                    cy.deleteMember(data.nombre_miembro);
                    cy.wait(1000)

                    /*And I delete a existing member */
                    cy.wait(1000)
                    adminPage.navigateToMembersPage();
                    memberPage.getMembersList().should('not.exist');

                    /* When I expect to not have any members or exceptions */
                    cy.wait(1000)
                    adminPage.navigateToMembersPage();
                    memberPage.getMembersList().should('not.exist');
                })
        }
    })
}
