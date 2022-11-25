import { faker } from "@faker-js/faker";
import { AdminPage } from "../../pageObject/adminPage";
import { TagPage } from "../../pageObject/tagPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

const adminPage = new AdminPage();
const tagPage = new TagPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

const escenario21 = {
  a_priori: {
    datos_validos: {
      name: "nombre valido",
      slug: "slug",
      descripcion: "Descripcion valida",
      error: false,
    },
    datos_formato_invalido: {
      name: ")(!@#$",
      slug: 'slug',
      descripcion: "Descripcion valida",
      error: false,
    },
    datos_frontera_superior: {
      name: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)",
      slug: "slug",
      descripcion: "Descripcion valida",
      error: true,
    },
    campos_vacios: {
      name: '{backspace}',
      slug: "slug",
      descripcion: "Descripcion valida",
      error: true,
    },
    datos_frontera_inferior: {
      name: " ",
      slug: "slug",
      descripcion: "Descripcion valida",
      error: true,
    },
    datos_equivocados: {
      name: "|||||",
      slug: "slug2",
      descripcion: "Descripcion valida",
      error: false,

    },
    datos_repetidos: {
      name: "nombre valido",
      slug: "slug",
      descripcion: "Descripcion valida",
      error: false,
    },
  },
  aleatorio_dinámico: {
    datos_validos: {
      name: faker.lorem.word(),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,
    },
    datos_formato_invalido: {
      name: faker.internet.ip(),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,
    },
    datos_frontera_inferior: {
      name: faker.lorem.word(2),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,
    },
    datos_frontera_superior: {
      name: faker.lorem.paragraph(5),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: true,
    },
    campos_vacios: {
      name: '{backspace}',
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: true,
    },
    datos_equivocados: {
      name: faker.internet.emoji(),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,

    },
    datos_repetidos: {
      name: faker.lorem.word(),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,
    },
  },
  aleatorio: {
    datos_validos: {
      name: faker.name.firstName(),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,
    },
    datos_formato_invalido: {
      name: faker.internet.ip(),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,
    },
    datos_frontera_superior: {
      name: faker.lorem.paragraph(7),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: true,
    },
    datos_frontera_inferior: {
      name: faker.lorem.word(2),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,
    },
    campos_vacios: {
      name: '{backspace}',
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: true,
    },
    datos_equivocados: {
      name: faker.internet.emoji(),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,

    },
    datos_repetidos: {
      name: faker.name.firstName(),
      slug: faker.lorem.slug(),
      descripcion: faker.lorem.paragraph(3),
      error: false,
    },
  },
};

for (let escenario in escenario21) {
  describe("Ghost tests " + escenario, () => {
    beforeEach(() => {
      /* Given I log in into Ghost admin */
      cy.visit("http://localhost:2368/ghost");
      cy.login(Cypress.env("username"), Cypress.env("password"));
      cy.wait(1000);
    });

    for (let datoGenerado in escenario21[escenario]) {
      it("escenario 21." + datoGenerado, () => {
        let data = escenario21[escenario][datoGenerado];

        /* When I create a new Tag */
        adminPage.navigateToTagPage();
        cy.wait(1000);
        cy.createTag(data.name, data.slug, data.descripcion);
        cy.wait(1000);
        cy.reload();
        /* And get a create a new Post */
        adminPage.navigateToMainPage();
        cy.wait(500);
        adminPage.getNewPostButton().click();
        cy.wait(1000);
        cy.createPost("My first post", "This is my first post");
        cy.wait(500);
        /* Then I expect to be able to see the post */
        adminPage.navigateToPostsPage();
        cy.wait(500);
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        publishedPostsPage
          .getAllPostTitles()
          .contains("My first post")
          .should("exist");
        /* And I expect to be able to see the Tag */
        adminPage.navigateToTagPage();
        cy.wait(1000);
        if (!data.error) {
          tagPage.getAllTagsTitle().contains(data.name).should("exist");
          /* CleanUp */
          adminPage.navigateToTagPage();
          cy.wait(500);
          cy.deleteAllTags();
          cy.wait(1000);
        } else {
          tagPage.getNoTagsArea().should("exist");
        }
        /* CleanUp */
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.deleteAllPosts();
        cy.wait(1000);
      });
    }
  });
}
