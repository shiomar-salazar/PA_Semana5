

Feature: Escenario 17 Crear un miembro luego crear un post nuevamente crear otro post y por ultimo eliminarlo
    
@user1 @web


Scenario: Como usuario quiero Crear un miembro luego crear un post nuevamente crear otro post y por ultimo eliminarlo
	
	Given I want to create a new Member
	When I fill the information of the Member "REbeca lopera","sandra45@gmail.com","Es profesora de buceo en maldivas"
	Then I should see the Member published

	And I want to create a new Post
	And I fill the information Post "calabaza calabaza","todo el mundo para su casa"
	And I should see the post published

	And I want to create a new Post
	And I fill the information Post "pleito de ayer","no se debe mantener, paz para hoy"
	And I should see the post published

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted
