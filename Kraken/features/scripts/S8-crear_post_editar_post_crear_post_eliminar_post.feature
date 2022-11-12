

Feature: Escenario 8 Crear un post luego editarlo despues crear otro post y despues eliminarlo
    
@user1 @web


Scenario: Como usuario quiero crear un post despues editarlo enseguida crear otro post para luego eliminarlo
	
	Given I want to create a new Post
	When I fill the information Post "Nuevos Jovenes","Son aquellos que conforman los Jóvenes en Acción es un programa de Prosperidad Social que apoya a los jóvenes en condición de pobreza y vulnerabilidad, con la entrega de transferencias"
	Then I should see the post published

	And I want to edit a Post 
	And I fill the information Post "Costa Rica","es un país de América Central con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico. Aunque su capital, San José, es hogar de instituciones culturales, como el Museo del Oro Precolombino"
	And I should see the Post Updated

	And I want to create a new Post
	And I fill the information Post "Las Vacas Flacas","A este paso con un dolar de mas de $5.000 vamos a quedar mas delgados que las vacas flacas   ..."
	And I should see the post published

	And I want to edit a Post
	And I selected the delete post settings
	And I should confirm the Post deleted

