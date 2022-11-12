

Feature: funcionalidad eliminar un miembro Ghost Admin
    
@user1 @web

Scenario: Como usuario quiero eliminar un miembro en Ghost

	Given I want to delete a Member
	When I select the delete Member option
	Then I should see the Member deleted
  


