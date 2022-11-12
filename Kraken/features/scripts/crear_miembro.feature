

Feature: Funcionalidad crear miembro en Ghost Admin
    
@user1 @web
   

Scenario: Como usuario quiero crear un miembro nuevo en Ghost

	Given I want to create a new Member
	When I fill the information of the Member "sandra lopera","sandra@gmail.com","Es profesora de buceo en maldivas"
	Then I should see the Member published

