

Feature: Escenario 14 Crear un miembro despues eliminar un post y luego eliminar otro post
    
@user1 @web


Scenario: Como usuario quiero Crear un miembro despues eliminar un post y luego eliminar otro post

	Given I want to create a new Member
	When I fill the information of the Member "Gertrudis gonzalez","Gertrudis5000@gmail.com","campeona de patinaje intermunicipal"
	Then I should see the Member published
	
	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted

	