

Feature: Escenario 5 Crear un post luego eliminarlo despues crear otro post y por ultimo editarlo
    
@user1 @web


Scenario: Como usuario quiero crear un post para luego eliminarlo despues creo otro post y luego lo edito en Ghost
	
	Given I want to create a new Post
	When I fill the information Post "Los Jovenes","Jóvenes en Acción es un programa de Prosperidad Social que apoya a los jóvenes en condición de pobreza y vulnerabilidad, con la entrega de transferencias"
	Then I should see the post published

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted
  
	And I want to create a new Post
	And I fill the information Post "Elefantes","Los elefantes o elefántidos son una familia de mamíferos placentarios del orden Proboscidea. Antiguamente se clasificaban, junto con otros mamíferos de piel gruesa, en el orden, ahora inválido, de los paquidermos."
	And I should see the post published

	And I want to edit a Post 
	And I fill the information Post "Ballenas","Los mamiferos mas grandes del planeta"
	And I should see the Post Updated
	
	
