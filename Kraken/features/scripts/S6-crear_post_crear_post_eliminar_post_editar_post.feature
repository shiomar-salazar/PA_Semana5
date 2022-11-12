

Feature: Escenario 6 Crear un post despues crear otro post luego eliminarlo y por ultimo editar el siguiente post en la lista
    
@user1 @web


Scenario: Como usuario quiero crear un post luego otro post para luego eliminarlo despues edito el primer post que cree
	
	Given I want to create a new Post
	When I fill the information Post "Lechugas","Son las verduras mas verdes y ricas de toda la familia lechugal que habita en el paramo de jaramillo"
	Then I should see the post published

	And I want to create a new Post
	And I fill the information Post "El conflicto UCraniano","El conflicto es verdadero o simplemente una trama para crear una nueva ola economica que permita a los mas ricos hacerse riquisimos"
	And I should see the post published

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted
  
	And I want to edit a Post 
	And I fill the information Post "LAs grandes Ballenas","¿¿¿¿¿¿¿¿¿¿¿¿Peces o mamiferos o mami-PEces??????"
	And I should see the Post Updated
	
	
