

Feature: Escenario 15 Crear un post luego otro post despues otro post y editar este post
    
@user1 @web


Scenario: Como usuario quiero Crear un post luego otro post despues otro post y editar este post
	
	Given I want to create a new Post
	When I fill the information Post "CArtagena","ciudad magica que encierra una gran historia y belleza"
	Then I should see the post published

	And I want to create a new Post
	And I fill the information Post "MEdellin","LA ciudad de la eterna primavera donde llueve la mitad del año"
	And I should see the post published

	And I want to create a new Post
	And I fill the information Post "CAli","Donde bailar es lo unico que no se debe dejar de hacer"
	And I should see the post published

	And I want to edit a Post 
	And I fill the information Post "PAsto","es mejor que CAli y tiene pastusas y pastusos "
	And I should see the Post Updated
