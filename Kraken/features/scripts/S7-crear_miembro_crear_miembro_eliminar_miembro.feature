

Feature: Escenario 7 Crear un miembro despues crear otro miembro y luego eliminarlo
    
@user1 @web


Scenario: Como usuario quiero crear un miembro luego otro miembro para luego eliminarlo
	
	Given I want to create a new Member
	When I fill the information of the Member "Lorena maquia","lorena.maquia@gmail.com","Es profesora de buceo en maldivas"
	Then I should see the Member published

	And I want to create a new Member
	And I fill the information of the Member "Sandra Peña","sandra.l2000@gmail.com","Es profesora de buceo en maldivas"
	And I should see the Member published

	And I want to delete a Member
	And I select the delete Member option
	And I should see the Member deleted
  