

Feature: Escenario 16 Crear un post luego eliminarlo despues editar otro post para por ultimo eliminarlo
    
@user1 @web


Scenario: Como usuario quiero Crear un post luego eliminarlo despues editar otro post para por ultimo eliminarlo
	
	Given I want to create a new Post
	When I fill the information Post "Rusia magica","guerrera y perseverante en el dominio"
	Then I should see the post published

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted

	And I want to edit a Post 
	And I fill the information Post "Suiza enorme","fria y exhuberante con majestuosas montañas "
	And I should see the Post Updated

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted
