

Feature: Funcionalidad editar Post Ghost Admin
    
@user1 @web

Scenario: Como usuario quiero editar un Post en Ghost

	Given I want to edit a Post 
	When I fill the information Post "Costa Rica","es un país de América Central con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico. Aunque su capital, San José, es hogar de instituciones culturales, como el Museo del Oro Precolombino"
	Then I should see the Post Updated

	
  

