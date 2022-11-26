import { faker } from "@faker-js/faker";

import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();
const correoRepetido = faker.internet.exampleEmail();
const imagen = faker.image.abstract();

const escenario5 = {
  a_priori: {
    datos_validos: {
      titulo: "nombre valido",
      descripcion: "Descripcion valida",
      nuevotitulo: "nuevo nombre valido editado",
      nuevadescripcion: "nueva Descripcion valida editada",
    },
    datos_formato_invalido: {
      titulo: "nombre invalido",
      descripcion: "Descripcion invalida",
      nuevotitulo: "#@#",
      nuevadescripcion: "%%%%%%%%%%%%%%%%%%",
    },
    datos_frontera_superior: {
      titulo:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)",
      descripcion: "Descripcion valida",
      nuevotitulo:
        "Japón es una nación insular del océano Pacífico con densas ciudades, palacios imperiales, parques nacionales montañosos y miles de santuarios y templos. ",
      nuevadescripcion: "Descripcion valida",
    },
    datos_frontera_inferior: {
      titulo: "a",
      descripcion: "Descripcion valida",
      nuevotitulo: ".",
      nuevadescripcion: "Descripcion valida",
    },
    campos_vacios: {
      titulo: "{backspace}",
      descripcion: "Descripcion valida",
      nuevotitulo: "{backspace}",
      nuevadescripcion: "Descripcion valida",
    },
    datos_equivocados: {
      titulo: "|||||",
      descripcion: "Descripcion valida",
      nuevotitulo: "°°°°°°°°°°°°",
      nuevadescripcion: "%%%%%%%%%%%%%%%%%%",
    },
    datos_repetidos: {
      titulo: "dato repetido",
      descripcion: "dato repetido",
      nuevotitulo: "volvemos a repetir los datos",
      nuevadescripcion: "volvemos a repetir los datos",
    },
  },

  aleatorio_dinámico: {
    datos_validos: {
      titulo: faker.name.firstName(),
      descripcion: "Descripcion valida",
      nuevotitulo: faker.name.firstName(),
      nuevadescripcion: imagen,
    },
    datos_formato_invalido: {
      titulo: faker.name.firstName(),
      descripcion: faker.lorem.paragraph(5),
      nuevotitulo: faker.name.firstName(),
      nuevadescripcion: faker.lorem.paragraph(10),
    },
    datos_frontera_superior: {
      titulo: faker.lorem.paragraph(5),
      descripcion: "Descripcion valida",
      nuevotitulo: faker.lorem.paragraph(10),
      nuevadescripcion: "nueva Descripcion valida",
    },
    datos_frontera_inferior: {
      titulo: faker.lorem.word({ strategy: "shortest" }),
      descripcion: "A",
      nuevotitulo: faker.lorem.word({ strategy: "shortest" }),
      nuevadescripcion: "B",
    },
    campos_vacios: {
      titulo: faker.name.firstName(),
      descripcion: "{backspace}",
      nuevotitulo: faker.name.firstName(),
      nuevadescripcion: "{backspace}",
    },
    datos_equivocados: {
      titulo: faker.internet.domainName(),
      descripcion: "Descripcion valida",
      nuevotitulo: faker.internet.domainName(),
      nuevadescripcion: "nueva Descripcion equivocada",
    },
    datos_repetidos: {
      titulo: "correo@valido.com",
      descripcion: "correo@valido.com",
      nuevotitulo: "nueva correo@valido.com",
      nuevadescripcion: "nueva correo@valido.com",
    },
  },

  aleatorio: {
    datos_validos: {
      titulo: faker.name.firstName(),
      descripcion: faker.lorem.paragraph(3),
      nuevotitulo: faker.name.firstName(),
      nuevadescripcion: faker.lorem.paragraph(3),
    },
    datos_formato_invalido: {
      titulo: faker.name.firstName(),
      descripcion: faker.lorem.paragraph(3),
      nuevotitulo: faker.name.firstName(),
      nuevadescripcion: faker.lorem.paragraph(3),
    },
    datos_frontera_superior: {
      titulo: faker.lorem.paragraph(7),
      descripcion: faker.lorem.paragraph(3),
      nuevotitulo: faker.lorem.paragraph(7),
      nuevadescripcion: faker.lorem.paragraph(3),
    },
    datos_frontera_inferior: {
      titulo: faker.lorem.word({ strategy: "shortest" }),
      descripcion: faker.lorem.paragraph(3),
      nuevotitulo: faker.lorem.word({ strategy: "shortest" }),
      nuevadescripcion: faker.lorem.paragraph(7),
    },
    campos_vacios: {
      titulo: faker.name.firstName(),
      descripcion: "{backspace}",
      nuevotitulo: faker.lorem.word({ strategy: "shortest" }),
      nuevadescripcion: "{backspace}",
    },
    datos_equivocados: {
      titulo: faker.internet.domainName(),
      descripcion: faker.lorem.paragraph(3),
      nuevotitulo: faker.internet.domainName(),
      nuevadescripcion: faker.lorem.word({ strategy: "shortest" }),
    },
    datos_repetidos: {
      titulo: correoRepetido,
      descripcion: correoRepetido,
      nuevotitulo: correoRepetido,
      nuevadescripcion: correoRepetido,
    },
  },
};

/*  Despues de hacer Login exitoso, quiero Crear un nuevo Post y Eliminar un Post existente 
y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente */

for (let escenario in escenario5) {
  describe("Ghost tests " + escenario, () => {
    beforeEach(() => {
      /* Given I log in into Ghost admin */
      cy.visit("http://localhost:2368/ghost");
      cy.login(Cypress.env("username"), Cypress.env("password"));
      cy.wait(1000);
    });

    for (let datoGenerado in escenario5[escenario]) {
      it("escenario 5." + datoGenerado, () => {
        let data = escenario5[escenario][datoGenerado];

        /* And then I create a new Post */
        adminPage.navigateToMainPage();
        cy.wait(500);
        adminPage.getNewPostButton().click();
        cy.wait(1000);
        cy.createPost(data.titulo, data.descripcion);
        cy.wait(500);

        /* Then I expect to be able to see the post */
        adminPage.navigateToPostsPage();
        cy.wait(500);
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        if (data.titulo == "{backspace}") {
          publishedPostsPage
            .getAllPostTitles()
            .contains("(Untitled)")
            .should("exist");
        } else {
          publishedPostsPage
            .getAllPostTitles()
            .contains(data.titulo)
            .should("exist");
        }

        /* Delete a Post */
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.deleteAllPosts();
        cy.wait(500);

        /* And then I create a new Post */
        adminPage.navigateToMainPage();
        cy.wait(500);
        adminPage.getNewPostButton().click();
        cy.wait(1000);
        cy.createPost(data.titulo, data.descripcion);
        cy.wait(500);

        /* Then I expect to be able to see the post */
        adminPage.navigateToPostsPage();
        cy.wait(500);
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        if (data.titulo == "{backspace}") {
          publishedPostsPage
            .getAllPostTitles()
            .contains("(Untitled)")
            .should("exist");
        } else {
          publishedPostsPage
            .getAllPostTitles()
            .contains(data.titulo)
            .should("exist");
        }

        /* And then I edit a Post */
        adminPage.navigateToPostsPage();
        cy.wait(500);
        if (data.titulo == "{backspace}") {
          cy.editPost("(Untitled)", data.nuevotitulo, data.nuevadescripcion);
        } else {
          cy.editPost(data.titulo, data.nuevotitulo, data.nuevadescripcion);
        }

        cy.wait(500);
        cy.reload();

        /* Then I expect to be able to see the post edited*/
        adminPage.navigateToPostsPage();
        cy.wait(500);
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        if (data.nuevotitulo == "{backspace}") {
          publishedPostsPage
            .getAllPostTitles()
            .contains("(Untitled)")
            .should("exist");
        } else {
          publishedPostsPage
            .getAllPostTitles()
            .contains(data.nuevotitulo)
            .should("exist");
        }

        /* Clean Up */
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.deleteAllPosts();
        cy.wait(1000);
      });
    }
  });
}
