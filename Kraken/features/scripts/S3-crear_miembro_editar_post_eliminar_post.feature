

Feature: Escenario 3 crear un miembro luego editar un post y terminar eliminando un post
    
@user1 @web


Scenario: Como usuario quiero crear un miembro nuevo luego editar un Post y por ultimo eliminar un post en Ghost
	
	Given I want to create a new Member
	When I fill the information of the Member "gustavo lopez","gustavo@gmail.com","Es alpinista profesional"
	Then I should see the Member published

	And I want to edit a Post 
	And I fill the information Post "Colombia socialista?","Se recibe al primer gobierno de izquierda en 50 años, lo que marca un precedente en la nueva ruta economica"
	And I should see the Post Updated
	
	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted
