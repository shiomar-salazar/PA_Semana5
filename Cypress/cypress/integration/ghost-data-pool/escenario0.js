import { faker } from '@faker-js/faker';

import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();
const correoRepetido = faker.internet.exampleEmail();

const escenario0 = {

    'a_priori': {
        'datos_validos' : 
            {
                username: 'a.solerf@uniandes.edu.co',
                password: 'Uniandes.123'
            },
        'datos_formato_invalido' :
            {
                username: '$%%$##',
                password: '$$%%%'
            },
        'datos_frontera_superior':
            {
                username: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
                password: '546456456rtyrtyrtyrtyrtytry564754yrtyrtyrt'
            },
        'datos_frontera_inferior':
            {
                username: 'a',
                password: 'Descripcion valida'
            },
        'campos_vacios':
            {
                username: '',
                password: ''
            },
        'datos_equivocados':
            {
                username: '545435',
                password: 'wretwerew'
            },
        'datos_repetidos': 
            {
                username: 'correo@valido.com',
                password: 'correo@valido.com',
            }
    },

    'aleatorio_dinámico': {
        'datos_validos' : 
            {
                username: faker.name.firstName(),
                password: 'Descripcion valida'
            },
        'datos_formato_invalido' :
            {
                username: faker.name.firstName(),
                password: faker.lorem.paragraph(5)
            },
        'datos_frontera_superior':
            {
                username: faker.lorem.paragraph(5),
                password: 'Descripcion valida'
            },
        'datos_frontera_inferior':
            {
                username: faker.lorem.word({ strategy: 'shortest' }),
                password: 'Descripcion valida'
            },
        'campos_vacios':
            {
                username: faker.name.firstName(),
                password: 'Descripcion valida'
            },
        'datos_equivocados':
            {
                username: faker.internet.domainName(),
                password: 'Descripcion valida'
            },
        'datos_repetidos': 
            {
                username: 'correo@valido.com',
                password: 'correo@valido.com',
            }
    },

    'aleatorio': {
        'datos_validos' : 
            {
                username: faker.name.firstName(),
                password: faker.lorem.paragraph(3)
            },
        'datos_formato_invalido' :
            {
                username: faker.name.firstName(),
                password: faker.lorem.paragraph(3)
            },
        'datos_frontera_superior':
            {
                username: faker.lorem.paragraph(7),
                password: faker.lorem.paragraph(3)
            },
        'datos_frontera_inferior':
            {
                username: faker.lorem.word({ strategy: 'shortest' }),
                password: faker.lorem.paragraph(3)
            },
        'campos_vacios':
            {
                username: faker.name.firstName(),
                password: ''
            },
        'datos_equivocados':
            {
                username: faker.internet.domainName(),
                password: faker.lorem.paragraph(3)
            },
        'datos_repetidos': 
            {
                username: correoRepetido,
                password: correoRepetido,
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
   
                })
        }
    })
}
