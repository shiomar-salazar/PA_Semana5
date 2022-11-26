import { faker } from '@faker-js/faker';

import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
import { LoginPage } from '../../pageObject/loginPage';

const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();
const correoRepetido = faker.internet.exampleEmail();
const logInPage = new LoginPage();

const escenario0 = {

    'a_priori': {
        'datos_validos' : 
            {
                username: Cypress.env("username"),
                password: Cypress.env("password"),
                error: false
            },
        'datos_formato_invalido' :
            {
                username: 'nombre valido',
                password: 'Descripcion valida',
                error: true
            },
        'datos_frontera_superior':
            {
                username: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
                password: 'Descripcion valida',
                error: true
            },
        'datos_frontera_inferior':
            {
                username: 'a',
                password: 'Descripcion valida',
                error: true
            },
        'campos_vacios':
            {
                username: '{backspace}',
                password: 'Descripcion valida',
                error: true
            },
        'datos_equivocados':
            {
                username: '|||||',
                password: 'Descripcion valida',
                error: true
            },
        'datos_repetidos': 
            {
                username: 'correo@valido.com',
                password: 'correo@valido.com',
                error: true
            }
    },

    'aleatorio_dinámico': {
        'datos_validos' : 
            {
                username: Cypress.env("username"),
                password: Cypress.env("password"),
                error: false
            },
        'datos_formato_invalido' :
            {
                username: faker.name.firstName(),
                password: faker.lorem.paragraph(5),
                error: true
            },
        'datos_frontera_superior':
            {
                username: faker.lorem.paragraph(5),
                password: 'Descripcion valida',
                error: true
            },
        'datos_frontera_inferior':
            {
                username: faker.lorem.word({ strategy: 'shortest' }),
                password: 'Descripcion valida',
                error: true
            },
        'campos_vacios':
            {
                username: faker.name.firstName(),
                password: '{backspace}',
                error: true
            },
        'datos_equivocados':
            {
                username: faker.internet.domainName(),
                password: 'Descripcion valida',
                error: true
            },
        'datos_repetidos': 
            {
                username: 'correo@valido.com',
                password: 'correo@valido.com',
                error: true
            }
    },

    'aleatorio': {
        'datos_validos' : 
            {
                username: Cypress.env("username"),
                password: Cypress.env("password"),
                error: false
            },
        'datos_formato_invalido' :
            {
                username: faker.name.firstName(),
                password: faker.lorem.paragraph(3),
                error: true
            },
        'datos_frontera_superior':
            {
                username: faker.lorem.paragraph(7),
                password: faker.lorem.paragraph(3),
                error: true
            },
        'datos_frontera_inferior':
            {
                username: faker.lorem.word({ strategy: 'shortest' }),
                password: faker.lorem.paragraph(3),
                error: true
            },
        'campos_vacios':
            {
                username: faker.name.firstName(),
                password: '{backspace}',
                error: true
            },
        'datos_equivocados':
            {
                username: faker.internet.domainName(),
                password: faker.lorem.paragraph(3),
                error: true
            },
        'datos_repetidos': 
            {
                username: correoRepetido,
                password: correoRepetido,
                error: true
            }
    },
}

/*  Despues de hacer Login exitoso, quiero Agregar un nuevo Miembro y despues Crear un nuevo Post
 y espero que todos los pasos se puedan ejecutar correctamente */

for (let escenario in escenario0) {  //  se lee elemnto a_priori,aleatorio_dinámico, aleatorio
        
        describe('Ghost tests ' + escenario, () => {
            beforeEach(() => {
                /* Given I log in into Ghost admin */
           
            })

            for (let datoGenerado in escenario0[escenario]) { // obtiene datos de a_priori {datos_validos,datos_formato_invalido, etc}
                it('escenario 0.' + datoGenerado, () => {

                    let data = escenario0[escenario][datoGenerado];
                    cy.visit('http://localhost:2368/ghost');
                    cy.login(data.username, data.password);
                    cy.wait(1000);
                    if(!data.error){
                        logInPage.getLogInSuccess().should('exist');
                    }else{
                        logInPage.getErrorLogIn().should('exist');
                    }
   
                })
        }
    })
}
