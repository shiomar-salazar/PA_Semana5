

Feature: Escenario 10 Crear un miembro luego un post para despues editarlo y por ultimo eliminar un miembro
    
@user1 @web


Scenario: Como usuario quiero crear un miembro luego un post para despues editarlo y por ultimo eliminar un miembro

	Given I want to create a new Member
	When I fill the information of the Member "Laura Ortega","lulu345@gmail.com","Es profesora en la universidad de los andes"
	Then I should see the Member published
	
	And I want to create a new Post
	And I fill the information Post "Caballo de pelo largo 2","Los hermosos caballos con gran melena que se pasean por Cartagena y corren como un ferrari"
	And I should see the post published

	And I want to edit a Post 
	And I fill the information Post "Costa Rica el paraiso","Ubicado en el corazon de centro america con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico. Aunque su capital, San José, es hogar de instituciones culturales, como el Museo del Oro Precolombino"
	And I should see the Post Updated

	And I want to delete a Member
	And I select the delete Member option
	And I should see the Member deleted


