

Feature: Escenario 9 Crear un post luego crear un miembro y despues eliminar un post
    
@user1 @web


Scenario: Como usuario quiero crear un post despues crear un miembro y por ultimo eliminar un post

	Given I want to create a new Post
	When I fill the information Post "Caballo de pelo largo","Los hermosos caballos con gran melena que se pasean por Cartagena y corren como un ferrari"
	Then I should see the post published
	
	And I want to create a new Member
	And I fill the information of the Member "Luisa Camila","lulu345@gmail.com","Es profesora en la universidad de los andes"
	And I should see the Member published

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted

