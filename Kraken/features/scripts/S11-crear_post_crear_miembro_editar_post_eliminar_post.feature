

Feature: Escenario 11 Crear un post despues crear un miembro luego editar un post y por ultimo eliminarlo
    
@user1 @web


Scenario: Como usuario quiero crear un post luego agregar un miembro despues editar un post y por ultimo eliminarlo

	Given I want to create a new Post
	When I fill the information Post "Caballo de pelo largo 3","Los hermosos caballos con gran melena que se pasean por Cartagena y corren como un ferrari"
	Then I should see the post published	

	And I want to create a new Member
	And I fill the information of the Member "Martha tolusa","marta@gmail.com","Es profesora en la universidad de los andes"
	And I should see the Member published
	
	And I want to edit a Post 
	And I fill the information Post "San Andres el paraiso","Ubicado en el corazon de centro america con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico. Aunque su capital, San José, es hogar de instituciones culturales, como el Museo del Oro Precolombino"
	And I should see the Post Updated

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted



