

Feature: Escenario 19 editar un post luego agregar un miembro despues crear un post y por ultimo eliminar un miembro
    
@user1 @web


Scenario: Como usuario quiero editar un post luego agregar un miembro despues crear un post y por ultimo eliminar un miembro
	
	Given I want to edit a Post 
	When I fill the information Post "Dos circulos","otro de los grandes acuerdos del mundo xxxxxxxxxxxxxxxxx"
	Then I should see the Post Updated

	And I want to create a new Member
	And I fill the information of the Member "An Marie","Marielu@gmail.com","vive de la renta vitalicia"
	And I should see the Member published
	 
	And I want to create a new Post
	And I fill the information Post "Poblado"," el barrio caliente de MEdellin acoge a miles de turistas que disfrutan de sus restaurantes"
	And I should see the post published

	And I want to delete a Member
	And I select the delete Member option
	And I should see the Member deleted
  

