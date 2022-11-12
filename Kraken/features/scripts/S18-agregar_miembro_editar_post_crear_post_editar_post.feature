

Feature: Escenario 18 Crear un miembro luego editar un post despues crear un post y por ultimo editar un post
    
@user1 @web


Scenario: Como usuario quiero Crear un miembro luego editar un post despues crear un post y por ultimo editar un post
	
	Given I want to create a new Member
	When I fill the information of the Member "Maria Jimenez","Maria2222@gmail.com","Es profesora de buceo en maldivas"
	Then I should see the Member published

	And I want to edit a Post 
	And I fill the information Post "Elemento unO","Es la primera molecula de hidrogeno limpio"
	And I should see the Post Updated
  
	And I want to create a new Post
	And I fill the information Post "las mañanitas"," la cancion de todos los enamorados"
	And I should see the post published

	And I want to edit a Post 
	And I fill the information Post "El atomo","entre todas las moleculas el atomo ocupa el 4 lugar ya que permite la cohesion semantica nuclear"
	And I should see the Post Updated
