

Feature: escenarios Ghost Admin
    
@user1 @web

Scenario: Como usuario quiero crear un Post en Ghost

  	Given I want to create a new Post
	When I fill the information Post "Los Jovenes","Jóvenes en Acción es un programa de Prosperidad Social que apoya a los jóvenes en condición de pobreza y vulnerabilidad, con la entrega de transferencias"
	Then I should see the post published
